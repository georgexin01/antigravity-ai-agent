import { webcrypto } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ITERATIONS = 100000;
const SALT_SIZE = 16;
const IV_SIZE = 12;

/**
 * Replicates the Sovereign Crypto Engine for manual vault hydration.
 */
async function deriveKey(password, salt) {
  const encoder = new TextEncoder();
  const baseKey = await webcrypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return webcrypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: ITERATIONS,
      hash: 'SHA-256',
    },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function encrypt(data, password) {
  const encoder = new TextEncoder();
  const salt = webcrypto.getRandomValues(new Uint8Array(SALT_SIZE));
  const iv = webcrypto.getRandomValues(new Uint8Array(IV_SIZE));
  const key = await deriveKey(password, salt);

  const encrypted = await webcrypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(data)
  );

  const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
  combined.set(salt);
  combined.set(iv, salt.length);
  combined.set(new Uint8Array(encrypted), salt.length + iv.length);

  return Buffer.from(combined).toString('base64');
}

async function main() {
  const user_email = 'nelesp3@gmail.com'; // Hard-bound to identity
  const templatePath = path.join(os.homedir(), '.gemini', 'antigravity', 'vault', 'master_registry_template.json');
  
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Template not found at:', templatePath);
    process.exit(1);
  }

  const templateData = fs.readFileSync(templatePath, 'utf8');
  console.log('🛡️ Sovereign Vault Pulse: Generating encrypted blob...');

  try {
    const blob = await encrypt(templateData, user_email);
    console.log('✅ Encryption Complete.');
    
    // [🚀] Master Vault Deployment (V1.4)
    const vaultPath = path.join(os.homedir(), '.gemini', 'antigravity', 'vault', 'vault_master.enc');
    fs.writeFileSync(vaultPath, blob);
    console.log('💎 Deployed instantly to:', vaultPath);
    
  } catch (err) {
    console.error('❌ Encryption Failed:', err);
  }
}

main();
