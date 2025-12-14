import './style.css';
import { setupLayout } from './layout.ts';
import { setupTime } from './time.ts';
import { setupScreenLock } from './screenLock.ts';

setupLayout(document.documentElement);

const timeElement = document.getElementById('time')!;

setupScreenLock(timeElement);
setupTime(timeElement);
