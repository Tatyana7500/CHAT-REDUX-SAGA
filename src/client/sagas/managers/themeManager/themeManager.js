import light from '../../../theme/lightTheme';
import dark from '../../../theme/darkTheme';

const theme = {
    dark,
    light,
};

export const setTheme = (currentTheme, device) => {
    return theme[currentTheme][device];
};