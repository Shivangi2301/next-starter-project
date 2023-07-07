import { useRouter } from 'next/router';

function DynamicPageId() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Dynamic Page with ID: {id}</div>;
}

export default DynamicPageId;
