const colors = {
    color_01: '#35A298',
    color_02: '#d1dae8',
    color_03: '#000000',
    color_04: '#8080b4',
    color_05: '#e3e3f7',
    color_06: '#9e9e9e',
    color_07: '#cccccc',
    color_08: '#ffffff',
    color_09: '#676793',
    color_10: '#f9f9f9',
    color_11: '#161633',
    color_12: '#2c4451',
    color_13: '#212147',
    color_14: '#333333',
    color_15: '#383875',
    color_16: '#212147',
    color_17: '#D2DADF',
    color_18: 'rgba(255, 255, 255, 0.5)',
    color_19: '#5F346C',
    color_20: 'rgba(227, 18, 18, 0.8)',
    color_21: 'rgba(227, 18, 18, 0.5)',
    color_22: '#D4493E',
    image: 'url("/src/client/assets/icons/background.jpg")',
    imageChat: 'url("/src/client/assets/icons/chat.png")',
};

export default {
    mobile: {
        login: {
            backgroundFrom: colors._08,
            backgroundLogin: colors.color_08,
            textNotActive: colors.color_08,
            textForm: colors.color_03,
            buttonActive: colors.color_16,
            textActive: colors.color_02,
            colorText: colors.color_15,
            borderForm: colors.color_15,
            backgroundButton: colors.color_16,
            colorButton: colors.color_08,
            borderButton: colors.color_08,
        },
        signIn: {
            backgroundLogin: colors.color_08,
            buttonsWrapperColor: colors.color_04,
            textNotActive: colors.color_08,
            textForm: colors.color_03,
            buttonActive: colors.color_16,
            textActive: colors.color_02,
            textParagraph: colors.color_03,
        },
        modalContainer: {
            backgroundModal: colors.color_08,
        },
        errorWindow: {
            colorText: colors.color_11,
        },
        mainHeader: {
            colorText: colors.color_04,
            backgroundColor: colors._13,
        },
        main: {
            backgroundColor: colors.color_04,
        },
        contentBlock: {
            backgroundColor: colors.color_06,
            border: colors.color_08,
            colorText: colors.color_03,
        },
        usersList: {
            backgroundColorTitle: colors.color_01,
            border: colors.color_13,
        },
        chatBlock: {
            backgroundColor: colors.color_08,
            sendBottom: colors.color_16,
        },
        chatCloud: {
            colorText: colors.color_03,
            messageBackground: colors.color_08,
        },
        menu: {
            buttonActive: colors.color_16,
            textActive: colors.color_02,
            backgroundColor: colors.color_05,
        },
    },
    desktop: {
        app: {},
        login: {
            background: colors.image,
            backgroundWrapper: colors.color_18,
            color: colors.color_03,
            colorButton: colors.color_19,
            colorButtonActive: colors.color_20,
            colorButtonHover: colors.color_21,
        },
        signIn: {
            background: colors.image,
            backgroundWrapper: colors.color_18,
            color: colors.color_03,
            colorButton: colors.color_19,
            colorButtonActive: colors.color_20,
            colorButtonHover: colors.color_21,
        },
        main: {
            background: colors.image,
            backgroundWrapper: colors.color_18,
        },
        mainHeader: {
            color: colors.color_03,
            colorButton: colors.color_19,
            colorButtonActive: colors.color_20,
            colorButtonHover: colors.color_21,
        },
        chatBlock: {
            background: colors.imageChat,
            colorButton: colors.color_19,
            colorButtonHover: colors.color_21,
        },
        chatCloud: {
            messageBackground: colors.color_22,
            colorText: colors.color_03,
        },
        errorWindow: {
            colorText: colors.color_11,
        },
        modalContainer: {
            backgroundModal: colors.color_08,
        },
    },
};