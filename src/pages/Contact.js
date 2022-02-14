import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  let [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  return (
    <div>
      <h2>Hi {name}, Contact us here ...</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        suscipit. Velit dolorum vero maxime explicabo autem, distinctio tempora
        quisquam voluptatibus perspiciatis qui nesciunt harum. Voluptatem
        impedit asperiores aut excepturi sint.
      </p>
    </div>
  );
}
