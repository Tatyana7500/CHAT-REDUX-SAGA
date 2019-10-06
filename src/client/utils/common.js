import UAParser from 'ua-parser-js';
import MobileDetected from 'mobile-detect';

export const getBrowserInfo = () => {
    const parser = new UAParser(navigator.userAgent);
    const detectResult = parser.getResult();
    const md = new MobileDetected(navigator.userAgent);
    const isMobile = !!(md.phone() || md.tablet() || md.mobile());

    return {
        javaEnabled: navigator.javaEnabled(),
        browser: detectResult.browser.name ? detectResult.browser.name : null,
        browserVersion: detectResult.browser.version,
        browserMajorVersion: parseFloat(detectResult.browser.major),
        isMobile,
        os: detectResult.os.name,
        osVersion: detectResult.os.version,
        deviceName: isMobile ? 'mobile' : 'desktop',
        deviceType: detectResult.device.model ? detectResult.device.model :
            detectResult.os.name === 'Android' && detectResult.device.type === 'mobile' ? 'Android mobile' : 'desktop',
        deviceOS: detectResult.os.name,
        doc_w: document.documentElement.clientWidth || 0,
        doc_h: document.documentElement.clientHeight || 0,
        orientation: (window.innerHeight / window.innerWidth > 1) ? 'portrait' : 'landscape',
        userAgent: detectResult.ua,
    };
};