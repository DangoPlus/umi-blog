# umi-blog ver.2023
using pnpm.

``` bash
"dev": "umi dev",
"build": "prisma generate && umi build",
"postinstall": "umi setup",
"setup": "umi setup",
"start": "npm run dev"
```
### tutorial
https://umijs.org/docs/tutorials/blog

### example
https://github.com/umijs/umi-blog-example


### ui
https://daisyui.com/?lang=zh_cn
https://tailwindcss.com/
### redis
https://console.upstash.com/redis/456ed5b7-a30b-4a79-8cfa-edd18a685818

### msyql
https://app.planetscale.com/dangoplus/umi-blog
``` bash
# dump db
pscale database dump [database] [branch]
```
- https://github.com/planetscale/discussion/discussions/168

### setup db from scheme
``` bash
# init db
 npx prisma db push
 ```