Сделано страница товара с карточкой товара, сделан аккордеон + показ доп контента + слайдер фоток.

Цель
добавим каталог и роутинг для проекта со страницей товара

Шаг 1. Задача
Преобразуем проект карточки товара в SPA-приложение с роутингом и каталогом.

Нужно добавить роутинг на страницу каталога с продуктами и шапку с навигацией.

Шаг 2. Поменяем моки
Изменим моки так, чтобы в них был не один продукт, а массив продуктов.
Добавили новые данные в mock.js.
В mock.js и index.js изменили product на products и сделал рендеринг с нулевого [0] элемента.

Шаг 3. Настройка роутинга
Создадим компонент App и подключим его в index.js вместо ProductPage. А в самом App по аналогии с примерами из теоретической части создадим роутинг, где на главной странице отобразим ProductPage.

import React from "react";
import { products } from "/src/mock";
import ProductPage from "/src/product-page/product-page";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
return (
<BrowserRouter>
<Routes>
<Route
path="/"
element={<ProductPage product={products[0]} showInfoInAccordion />}
/>
</Routes>
</BrowserRouter>
);
}

Не забудьте подключить react-router-dom в зависимости.
получим
https://codesandbox.io/s/6-2-1v2-forked-2cxpyc?file=/src/app/app.js

Шаг 4. Реализуем компонент каталога
Создадим компонент каталога, который в props будет получать список товаров и выводить их в виде списка карточек:

import React from "react";
import { Image } from "/src/elements";
import Title from "/src/title/title";
import FullPrice from "/src/full-price/full-price";
import { List, ListItem } from "./styled";

export default function Catalog({ products }) {
return (
<>

<Title>Каталог</Title>
<List>
{products &&
products.length &&
products.map((product) => (
<ListItem key={product.code}>
<Image src={product.images[0]} />
<h2>{product.name}</h2>
<span>
<FullPrice oldPrice={product.oldPrice} price={product.price} />
</span>
</ListItem>
))}
</List>
</>
);
}

В файле app меняем компонент productpage на каталог.

получим
https://codesandbox.io/s/6-2-2v2-forked-y46jsz?file=/src/catalog/catalog.js

Шаг 5. Изменим роутинг для каталога
Отредактируем роутинг. Расположим каталог на главной странице — /. Страница продукта будет иметь динамический URL вида /product/:code.

Тогда структура роутинга может выглядеть так:
<Routes>
<Route path="/">
<Route index > // сюда нужно отрендерить элемент со страницей каталога
<Route path="product">
<Route path=":code"  /> // сюда нужно отрендерить элемент со страницей товара или ошибкой
</Route>
</Route>
</Routes>

В качестве уникального идентификатора для страницы товара используем артикул. По значению артикула, полученному через react-router, будем находить в массиве нужный продукт и отображать его данные на страницу.

Важно учесть: если добавить эту логику в уже и без того большой компонент ProductPage, то это его усложнит. Поэтому заведём отдельный компонент ProductOr404, который будет рисовать страницу или ошибку 404 в зависимости от того, есть товар с нужным артикулом в моках или нет:
function ProductOr404({ products }) {
const { code } = useParams();
const product = products.find((product) => product.code.toString() === code);
return product ? (
<ProductPage product={product} />
) : (

<h1>404 страница не найдена</h1>
);
}

В результате получится вот так:
import React from "react";
import { products } from "/src/mock";
import ProductPage from "/src/product-page/product-page";
import Catalog from "/src/catalog/catalog";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProductOr404({ products }) {
const { code } = useParams();
const product = products.find((product) => product.code.toString() === code);
return product ? (
<ProductPage product={product} />
) : (

<h1>404 страница не найдена</h1>
);
}

export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/">
<Route index element={<Catalog products={products} />} />
<Route path="product">
<Route path=":code" element={<ProductOr404 products={products} />} />
</Route>
</Route>
</Routes>
</BrowserRouter>
);
}

получим
https://codesandbox.io/s/6-2-3v2-forked-dxfz9y?file=/src/app/app.js:0-871

Шаг 6. Поменяем ссылки на Link
Обернём карточки каталога в ссылки c помощью компонента Link, чтобы они ссылались на нужные страницы товара:
import React from "react";
import { Image } from "/src/elements";
import Title from "/src/title/title";
import FullPrice from "/src/full-price/full-price";
import { List, ListItem, StyledLink } from "./styled";

export default function Catalog({ products }) {
return (
<>

<Title>Каталог</Title>
<List>
{products &&
products.length &&
products.map((product) => (
<ListItem key={product.code}>
<StyledLink to={`/product/${product.code}`}>
<Image src={product.images[0]} />
<h2>{product.name}</h2>
<span>
<FullPrice
                    oldPrice={product.oldPrice}
                    price={product.price}
                  />
</span>
</StyledLink>
</ListItem>
))}
</List>
</>
);
}

Получим
https://codesandbox.io/s/6-2-3v2-forked-iqhcpc?file=/src/catalog/catalog.jsx

Шаг 7. Добавим навигацию
Добавим навигацию вверху страницы, чтобы можно было вернуться со страницы товара обратно в каталог, и общую обёртку для всех страниц.

Для этого создадим компонент Layout:
import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, Nav } from "./styled";
import { Outlet } from "react-router-dom";

export default function Catalog({ children }) {
return (
<Wrapper>
<Nav>
<NavLink to="/">Каталог</NavLink>
</Nav>
<main>
<Outlet />
</main>
</Wrapper>
);
}

Теперь передадим <Layout /> в props element для , чтобы все страницы сайта начали рендерится внутри этого шаблона:
import React from "react";
import { products } from "/src/mock";
import ProductPage from "/src/product-page/product-page";
import Catalog from "/src/catalog/catalog";
import Layout from "/src/layout/layout";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProductOr404({ products }) {
const { code } = useParams();
const product = products.find((product) => product.code.toString() === code);
return product ? (
<ProductPage product={product} />
) : (
<h1>404 страница не найдена</h1>
);
}

export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Catalog products={products} />} />
<Route path="product">
<Route
path=":code"
element={<ProductOr404 products={products} />}
/>
</Route>
</Route>
</Routes>
</BrowserRouter>
);
}

Получим
https://codesandbox.io/s/6-2-5v2-forked-qt5684?file=/src/app/app.js
