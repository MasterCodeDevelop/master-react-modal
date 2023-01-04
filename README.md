# Basic Modal React

> A simple and basic reusable modal component built in javascript using react

> No other third party libraries just only components in jsx

<a href="https://www.npmjs.com/package/master-react-modal"><img alt="npm" src="https://img.shields.io/npm/dw/master-react-modal"></a>
<a href="https://www.npmjs.com/package/master-react-modal"><img alt="npm" src="https://img.shields.io/npm/v/master-react-modal"></a>
<a href="https://www.npmjs.com/package/master-react-modal"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/master-react-modal"></a>
<a href="https://www.npmjs.com/package/master-react-modal">
<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />
</a>

## Installation

```
npm i master-react-modal
```

```
yarn add master-react-modal
```

```
pnpm add master-react-modal
```

## Example (classic)

```js
import { Modal, ModalHeader, ModalBody } from 'master-react-modal';
import { useState } from 'react';

const Example = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);

  return (
    <div className="app">
      <button className="btn btn-primary" onClick={() => setOpenModal(true)}>
        Show Modal
      </button>
      <Modal isOpen={openModal} className="modal-cadetblue" close={closeModal}>
        <ModalHeader title="Header title" close={closeModal} />
        <ModalBody>Your body content</ModalBody>
      </Modal>
    </div>
  );
};

export default Example;
```

## 💻 See the demo

open [master-react-modal](https://mastercodedevelop.github.io/master-react-modal/).

## 📚 Technology used

- [NPM](https://www.npmjs.com)
- JavaScript
- HTML
- [React](https://fr.reactjs.org/)
- CSS [SCSS](https://sass-lang.com)
- GIT ([GitHub](https://github.com/))
- Editeur de code source: [VSC: Visual Studio Code](https://code.visualstudio.com/).
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
