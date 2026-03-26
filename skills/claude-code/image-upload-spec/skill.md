# Image Upload Spec (image-upload-spec)

Configure image uploads with dimension specs, file type validation, auto-resize, and crop modal.

## Description

When a form has image upload fields, define an `ImageSpec` to enforce:
- **File type validation** — only allowed formats (e.g., jpg, jpeg), error popup if wrong
- **Auto-resize** — images with matching ratio are resized to exact spec dimensions
- **Crop modal** — images with mismatched ratio open a crop UI (vue-advanced-cropper), then resize
- **Only processed images are kept** — originals are never uploaded

## Core Files

| File | Purpose |
| --- | --- |
| `src/utils/image-processor.ts` | `ImageSpec` type, `validateImageType()`, `loadImage()`, `checkImageNeedsCrop()`, `processImage()`, `formatAcceptList()`, `specToAcceptAttr()` |
| `src/components/image-crop-modal.vue` | Crop modal using `vue-advanced-cropper` — fixed crop area, dark overlay, drag to reposition, scroll to zoom |

## ImageSpec Type

```typescript
interface ImageSpec {
  width: number;        // Target width in pixels (e.g., 800)
  height: number;       // Target height in pixels (e.g., 800)
  accept: string[];     // Allowed extensions without dot (e.g., ['jpg', 'jpeg'])
  outputType?: string;  // 'image/jpeg' | 'image/png' (default: 'image/jpeg')
  outputQuality?: number; // 0-1 for jpeg (default: 0.9)
}
```

## Integration Pattern (Reference: lesson-form.vue)

### Step 1: Define the spec

```typescript
const imageSpec: ImageSpec = {
  width: 800,
  height: 800,
  accept: ['jpg', 'jpeg'],
  outputType: 'image/jpeg',
  outputQuality: 0.9,
};
```

### Step 2: Import utilities and crop modal

```typescript
import ImageCropModal from '#/components/image-crop-modal.vue';
import {
  checkImageNeedsCrop,
  formatAcceptList,
  loadImage,
  processImage,
  specToAcceptAttr,
  validateImageType,
} from '#/utils/image-processor';

const cropModalRef = ref<InstanceType<typeof ImageCropModal>>();
```

### Step 3: beforeUpload handler

Validates file type, checks ratio, either auto-resizes or opens crop modal.

```typescript
const handleBeforeUpload = async (file: File): Promise<File | boolean> => {
  // 1. Validate file type
  const typeError = validateImageType(file, imageSpec);
  if (typeError) {
    message.error(
      $t('page.imageProcessor.invalidType', {
        formats: formatAcceptList(imageSpec.accept),
      }),
    );
    return Upload.LIST_IGNORE as any;
  }

  try {
    // 2. Load image to check dimensions
    const img = await loadImage(file);

    // 3. Check aspect ratio
    if (checkImageNeedsCrop(img, imageSpec)) {
      // Ratio mismatch — open crop modal, reject this upload
      cropModalRef.value?.open(file);
      return Upload.LIST_IGNORE as any;
    }

    // 4. Ratio matches — just resize to exact spec dimensions
    const processed = await processImage(img, imageSpec, file.name);
    return processed;
  } catch {
    message.error($t('page.imageProcessor.processFailed'));
    return Upload.LIST_IGNORE as any;
  }
};
```

### Step 4: Handle crop confirm (manual upload after crop)

```typescript
const handleCropConfirm = async (croppedFile: File) => {
  const uid = `upload-${Date.now()}`;
  const uploadFile: UploadFile = {
    uid,
    name: croppedFile.name,
    status: 'uploading',
    percent: 0,
  };
  fileList.value = [...fileList.value, uploadFile];

  await uploadPhoto({
    file: croppedFile,
    onProgress: (progress) => {
      const idx = fileList.value.findIndex((f) => f.uid === uid);
      if (idx !== -1) {
        fileList.value[idx] = { ...fileList.value[idx]!, percent: progress.percent };
        fileList.value = [...fileList.value];
      }
    },
    onSuccess: (data) => {
      const idx = fileList.value.findIndex((f) => f.uid === uid);
      if (idx !== -1) {
        fileList.value[idx] = {
          ...fileList.value[idx]!,
          status: 'done',
          percent: 100,
          response: data,
          url: getStorageUrl(data.url),
          thumbUrl: getStorageUrl(data.url),
        };
        fileList.value = [...fileList.value];
      }
    },
    onError: (error) => {
      const idx = fileList.value.findIndex((f) => f.uid === uid);
      if (idx !== -1) {
        fileList.value[idx] = { ...fileList.value[idx]!, status: 'error', percent: 0 };
        fileList.value = [...fileList.value];
      }
      message.error(error.message || $t('page.imageProcessor.uploadFailed'));
    },
  });
};
```

### Step 5: Template

```vue
<Upload
  v-model:file-list="fileList"
  :accept="specToAcceptAttr(imageSpec)"
  :before-upload="handleBeforeUpload"
  :custom-request="handleUpload"
  list-type="picture-card"
  :max-count="5"
  :multiple="true"
  @change="handleChange"
>
  <div class="flex flex-col items-center">
    <IconifyIcon icon="lucide:plus" class="text-lg" />
    <div class="mt-1 text-xs">{{ $t('page.lessons.form.uploadImage') }}</div>
  </div>
</Upload>

<!-- Spec hint -->
<div class="mt-1 text-xs text-gray-400">
  {{ $t('page.imageProcessor.specHint', {
    width: imageSpec.width,
    height: imageSpec.height,
    formats: formatAcceptList(imageSpec.accept),
  }) }}
</div>

<!-- Crop Modal -->
<ImageCropModal
  ref="cropModalRef"
  :spec="imageSpec"
  @confirm="handleCropConfirm"
/>
```

## Crop Modal Details

The crop modal (`image-crop-modal.vue`) uses `vue-advanced-cropper`:

- **Fixed crop area** — matches spec dimensions (e.g., 800×800), not resizable, not movable
- **Dark overlay** — areas outside crop are dimmed
- **Drag to reposition** — user moves the image behind the fixed crop frame
- **Scroll to zoom** — zoom in/out
- **Responsive** — frame scales down if viewport can't fit the full spec size
- **Frame size calculation**: `scale = min(1, viewportW / specW, viewportH / specH)`

## Processing Flow

```
User selects image
  → validateImageType() — wrong format? → error popup, reject
  → loadImage() — load into HTMLImageElement
  → checkImageNeedsCrop() — ratio mismatch?
    YES → open crop modal → user adjusts → processImage(cropRegion) → upload
    NO  → processImage(fullImage) → auto-resize to spec → upload
  → Only processed file is uploaded (original discarded)
```

## i18n Keys

All under `page.imageProcessor`:

| Key | EN | ZH |
| --- | --- | --- |
| `specHint` | Required: {width}×{height}px, {formats} only | 要求：{width}×{height}px，仅限 {formats} |
| `invalidType` | Only {formats} images are allowed | 仅允许 {formats} 格式的图片 |
| `processFailed` | Failed to process image | 图片处理失败 |
| `uploadFailed` | Failed to upload image | 图片上传失败 |
| `cropTitle` | Crop Image | 裁剪图片 |
| `cropHint` | Crop to {width}×{height}px ratio | 裁剪为 {width}×{height}px 比例 |
| `cropConfirm` | Crop & Upload | 裁剪并上传 |
| `dragHint` | Drag to reposition, scroll to zoom | 拖动调整位置，滚轮缩放 |

## Common Spec Examples

| Use Case | Width | Height | Accept | Ratio |
| --- | --- | --- | --- | --- |
| Square avatar/thumbnail | 800 | 800 | jpg, jpeg | 1:1 |
| Banner/cover | 1200 | 400 | jpg, jpeg, png | 3:1 |
| Product photo | 1000 | 1000 | jpg, jpeg | 1:1 |
| Document scan | 800 | 1200 | jpg, jpeg, png | 2:3 |
