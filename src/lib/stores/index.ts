import { writable } from "svelte/store";

export const fullScreenOn = writable(false);
export const minScreenOn = writable(false);
export const textPositionLayout = writable('');
export const imagePositionLayout = writable('');
export const colorLayout = writable('');

export const setBackground = writable('');
export const setHeadText = writable('');
export const setTypography = writable('');
export const setColor = writable('');

export const layoutWidth = writable(null);
export const setResolution = writable('');
export const setMediaScreen = writable('');

export const campaignType = writable('');