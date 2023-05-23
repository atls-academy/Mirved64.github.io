export default function handleError(error: unknown): void {
  if (error instanceof Error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
}