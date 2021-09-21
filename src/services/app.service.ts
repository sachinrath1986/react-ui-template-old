import filter from 'lodash/filter';
import { MENU } from "../constants/menu";

export function loadAppMenu() {
    return Promise.resolve(filter(MENU, m => m.display !== false));
}