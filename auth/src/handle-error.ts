export const handleError = (error: unknown): void => {
  if (error instanceof Error) {
    // eslint-disable-next-line no-console
    console.error(error.message)
  }
}
