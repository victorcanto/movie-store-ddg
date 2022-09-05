import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { selectCartQuantity } from '../../store/cart/cart.selector';

interface ProtectedRouteProps {
	children: React.ReactNode & JSX.Element;
}

export function ProtectedCheckoutRoute({ children }: ProtectedRouteProps) {
	const cartQuantity = useAppSelector(selectCartQuantity);

	if (cartQuantity === 0) {
		return <Navigate to='/' />;
	}

	return children;
}
