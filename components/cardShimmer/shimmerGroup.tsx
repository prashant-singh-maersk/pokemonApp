import CardShimmer from './shimmer';

export default function ShimmerGroup({ count }: { count: number }) {
  let element = [];
  for (let i = 0; i < count; i++) {
    element.push(<CardShimmer />);
  }
  return <>{element}</>;
}
