# Modern Amazon Clone  

A e-commerce platform inspired by Amazon, featuring a modern UI/UX design. Browse hundreds of products, manage your cart, and enjoy a re-designed checkout experience with Prime member benefits integration.

Try the live demo here: [https://amazon-clone-demo.vercel.app](https://amazon-psi-flame.vercel.app/) (mobile and desktop).

## Features

- **Modern Product Browsing:** Discover products in a clean, intuitive interface with enhanced visual presentation
- **Smart Cart System:** Add/remove items with real-time updates and cart persistence
- **Prime Integration:** Explore Prime membership benefits including free shipping and exclusive deals
- **Secure Checkout:** Simulated payment processing with order confirmation
- **User Accounts:** Sign up/in functionality with order history tracking
- **Responsive Design:** Optimized experience across all device sizes

## Video Media

### <ins>Desktop Experience:</ins>
https://github.com/user-attachments/assets/78861805-856d-4d54-ac9f-2088738ae2a4



### <ins>Mobile Experience:</ins>  

https://github.com/user-attachments/assets/0ce88256-1bc5-4051-910c-d251ce9e2052

## Technologies Used:  

- React JS  
- TypeScript  
- [Tailwind CSS](https://tailwindcss.com/)  
- Firebase (Authentication/Firestore)  
- React Router  

## License  

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
