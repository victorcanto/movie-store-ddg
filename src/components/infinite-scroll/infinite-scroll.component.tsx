import React, { useEffect, useRef } from 'react';

export interface InfiniteScrollProps {
	callback: () => void;
}

export function InfiniteScroll({ callback }: InfiniteScrollProps) {
	const divInfiniteScrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const intersectionObserver = new IntersectionObserver(([entry]) => {
			const ratio = entry.intersectionRatio;

			if (ratio > 0) {
				callback();
			}
		});

		if (divInfiniteScrollRef.current) {
			intersectionObserver.observe(divInfiniteScrollRef.current);
		}

		return () => {
			intersectionObserver.disconnect();
		};
	}, [divInfiniteScrollRef]);

	return <div style={{ height: '90vh' }} ref={divInfiniteScrollRef} />;
}

// Ref: 'https://github.com/tsunode/infinite-scroll/blob/master/src/components/InfiniteScroll/InfiniteScroll.tsx';
