# Nextjs + TypeORM

## Setup Nextjs + typescript

### Install Nextjs

Install Before Install Nextjs

* [Nodejs(Windows)](https://nodejs.org/dist/v14.16.1/node-v14.16.1-x64.msi) [Nodejs(Mac)](https://nodejs.org/dist/v14.16.1/node-v14.16.1.pkg) (แนะนำ nodejs 14+)
* Install yarn `npm install --global yarn`

Install Nextjs

``` bash
cd <project path>
npx create-next-app <projectname>
```

Install Typescript to Project

เพิ่ม `tsconfig.json` ที่ project เพิ่ม code ส่วนนี้เข้าไป

``` javascript
{
    "compilerOptions": {
        "allowJs": true,
        "alwaysStrict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "lib": ["dom", "es2017"],
        "module": "esnext",
        "moduleResolution": "node",
        "noEmit": true,
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "strict": true,
        "target": "esnext"
    },
    "exclude": ["node_modules", "_actions", "_PipelineMapping", "_tool", "actions-runner"],
    "include": ["**/*.ts", "**/*.tsx"]
}
```

Install Typescript

``` bash
yarn add --dev typescript @types/react @types/node
```

เพิ่ม `next-env.d.ts`

``` typescript
/// <reference types="next" />
/// <reference types="next/types/global" />
```

เปลี่ยนชื่อ `pages/_app.js` เป็น `pages/_app.tsx`

``` typescript
import { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
```

เปลี่ยนชื่อ `pages/index.js` เป็น `pages/index.tsx`

``` typescript
const Home = () => {
  return (
    <div>
      ทดสอบ
    </div>
  )
}
export default Home
```

Run

``` base
yarn dev
```

### Install Tailwind

Install Tailwind Package

``` base
yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest
```

Create Configuration file
สร้าง ไฟล์ `tailwind.config.js` และ `postcss.config.js`

``` base
npx tailwindcss init -p
```

สร้างไฟล์ `postcss.config.js`

``` javascript
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}
```

สร้างไฟล์ `tailwind.config.js`

``` javascript
  module.exports = {
      purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
      darkMode: false, // or 'media' or 'class'
      theme: {
          extend: {},
      },
      variants: {
          extend: {},
      },
      plugins: [],
  }
```

แก้ไฟล์ `styles/globals.css`

``` css
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

import `styles/globals.css` ไปที่ `pages/index.tsx`

``` typescript
import '../styles/globals.css'

const Home = () => {
  return (
    <div>
      ทดสอบ
    </div>
  )
}
export default Home
```
