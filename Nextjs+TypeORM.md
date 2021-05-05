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
