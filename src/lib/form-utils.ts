/**
 * Utilitário para transformar dados de formulário antes de enviar para a action
 */
export function transformFormData<TInput, TOutput>(
  data: TInput,
  transformations: Record<string, (value: unknown) => unknown> = {},
): TOutput {
  const transformed = { ...data } as Record<string, unknown>;

  Object.entries(transformations).forEach(([key, transformer]) => {
    if (key in transformed) {
      transformed[key] = transformer(transformed[key]);
    }
  });

  return transformed as TOutput;
}

/**
 * Adiciona ID ao objeto de dados se fornecido
 */
export function withEntityId<T>(
  data: T,
  entityId?: string,
): T & { id?: string } {
  return {
    ...data,
    ...(entityId && { id: entityId }),
  };
}
