import * as engine      from '../../../engine';
import * as skeleton    from './skeleton';

// ─── Generate Line Comment ─────────────────────────────────────────────── ✣ ─

export const generateLineComment = skeleton.createCommentGenerationSkeleton({
  contextVerifier:    verifier,
  commentGenerator:   generator,
});

// ─── Verifier ──────────────────────────────────────────────────────────── ✣ ─

function verifier(context: engine.concepts.GeneratorContext): null {
  return null;
}

// ─── Generator ─────────────────────────────────────────────────────────── ✣ ─

function generator(context: engine.concepts.GeneratorContext): string {
  return (
    // Comment Grammar
    context.commentGrammarPrefix +
    // Line
    '─'.repeat(context.commentWidthWithoutLanguageAndOrnamentParts) +
    // Ornament
    context.ornament.render
  );
}