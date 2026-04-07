# ZETA Motion Prompting Blueprint (V1.5)

This blueprint codifies the workflow for **Scroll-Controlled Frame Animations** (Scrollytelling). This technique enables "Level 10" cinematic experiences by allowing the user to scrub through a high-end 3D animation using their scroll position.

## 1. Visual Asset Generation (Prompting)

To generate the frame sequence assets, use the following prompting framework:

### Video/Motion Prompt (Kling/Runway/Luma)
> **Prompt**: `Cinematic 3D render of [Product Name], [Material: e.g., Graphite/Ruby Glass], floating in dark void, slow 360-degree rotation, dramatic Rim Lighting, 4K resolution, 30fps. Slow movement, no jerky transitions.`

### Image Generation (Midjourney/Freepik)
> **Prompt**: `High-end product shot of [Product Name], studio lighting, clean background, 8k, photorealistic.`

## 2. Technical Implementation (Scrollytelling)

### Frame Sequence Conversion
1. **Video to Frames**: Convert 2-4 second video into a sequence of 60-120 high-quality **WebP** images.
2. **Naming Convention**: `hero_001.webp`, `hero_002.webp`, etc.

### Core Logic (Canvas Scrubber)
```javascript
class CanvasScrubber {
  constructor(canvas, frameCount, folderPath) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.frameCount = frameCount;
    this.images = [];
    this.curFrame = 0;
    this.loadImages(folderPath);
  }

  loadImages(path) {
    for (let i = 1; i <= this.frameCount; i++) {
      const img = new Image();
      img.src = `${path}/frame_${String(i).padStart(3, '0')}.webp`;
      this.images.push(img);
    }
  }

  render(progress) {
    const i = Math.floor(progress * (this.frameCount - 1));
    if (this.images[i] && this.images[i].complete) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.images[i], 0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
```

## 3. Interaction Strategy (V1.5 Rules)

- **Scroll Binding**: Link the progress of the `CanvasScrubber` to a GSAP `ScrollTrigger` mapped to the section's scroll range.
- **Section Transitions**: Use current Global Rule **P0-20 (Layered Depth)** to transition from a Scrollytelling canvas to solid data sections.

---
*Created: 2026-04-07 | Status: Verified Alpha (Synergy V1.5)*
