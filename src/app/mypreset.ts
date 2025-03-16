import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50:  '#FBE8F5',
            100: '#F6d1eb',
            200: '#eca3d7',
            300: '#e275c2',
            400: '#d847ae',
            500: '#b53690',
            600: '#69004D',  // <<-- Cor principal (base)
            700: '#5f0046',
            800: '#4d0039',
            900: '#3b002c',
            950: '#1f0016'
        }
    }
});