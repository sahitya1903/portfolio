import { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Signature easing curve for every scroll/enter reveal across the site.
 * Kept in one place so the motion feel stays consistent.
 */
export const REVEAL_EASE = [0.22, 1, 0.36, 1];

/**
 * useRevealOnce — shared scroll-into-view primitive.
 *
 * Wraps `useRef` + `useInView` with `once: true`, which latches permanently:
 * an interrupted reveal can never get stuck at opacity/scale 0 on a fast
 * scroll. Returns the ref to attach and whether the element has entered view.
 *
 * @param {string} margin - rootMargin-style offset for the trigger point.
 * @returns {[React.RefObject, boolean]} `[ref, inView]`
 */
const useRevealOnce = (margin = '0px 0px -80px 0px') => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return [ref, inView];
};

export default useRevealOnce;
