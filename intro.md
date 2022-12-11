Beneficios: 
- Entregarle el codigo al compilador
- Mensajes de error en tiempo real
- Con el comando tsc *.ts transpilamos todo el codigo a js (Tomar un lenguaje y transformarlo a otro)

Contras:
- Vas a sentir que se mete en tu camino

Config:
- tsc -init
- rootDir: ./src
- outDir: ./dist
- removeComments: true
- noEmmitOnError: false
- sourceMap: true
- noImplicitAny: true

Tipos de datos:
- string
- number
- boolean
- null
- undefined
- object
- function

- any (NO USARLO!!!)
- unkown
- never
- arrays
- tuplas
- enums

Tuplas:
- Es una variable que contiene un set de datos que estan ordenados