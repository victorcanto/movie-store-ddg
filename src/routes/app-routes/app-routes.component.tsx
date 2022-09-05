import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Menu } from '../../components';
import { Checkout } from '../checkout/checkout.component';
import { Home } from '../home/home.component';
import { Navigation } from '../navigation/navigation.component';
import { NotFound } from '../not-found/not-found.component';

export function AppRoutes() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='checkout' element={<Checkout />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}
