import test from 'node:test';
import assert from 'node:assert/strict';
import { formatCaptionLine } from '../app.js';

test('wraps long text into <= 42 char caption lines', () => {
  const lines = formatCaptionLine('Bem-vindo ao atendimento presencial acessível em tempo real para todos', 42);
  assert.ok(lines.length >= 2);
  assert.ok(lines.every((l) => l.length <= 42));
});
