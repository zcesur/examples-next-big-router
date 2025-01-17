/**
 * This is a Next.js page.
 */
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const result = trpc.router99.greeting.useQuery({} as any);

  if (!result.data) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div style={styles}>
      <h1>{result.data}</h1>
    </div>
  );
}

const styles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
