import Container from 'shared/components/Container';

import s from './materialsPage.module.css';
import { literature, resources } from './initialMaterials';

function MaterialsPage() {
  const literatureElements = literature.map(({ id, literatureName }) => {
    return (
      <li className={s.item} key={id}>
        {`${id}. ${literatureName} `}
      </li>
    );
  });
  const resourcesElements = resources.map(({ id, resourceName, link }) => {
    return (
      <li className={s.item} key={id}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={s.link}
        >{`${id}. ${resourceName} `}</a>
      </li>
    );
  });

  return (
    <div className={s.materials}>
      <Container>
        <h2 className={s.title}>Useful literature</h2>
        <ul className={s.list}>{literatureElements}</ul>

        <h2 className={s.title}>Useful resources</h2>
        <ul className={s.list}>{resourcesElements}</ul>
      </Container>
    </div>
  );
}

export default MaterialsPage;
