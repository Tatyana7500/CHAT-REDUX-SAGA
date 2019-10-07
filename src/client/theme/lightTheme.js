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
    color_17: '#D2DADF'
};

export default {
    mobile: {
        login: {
            backgroundLogin: colors.color_08,
            buttonsWrapperColor: colors.color_04,
            textNotActive: colors.color_08,
            textForm: colors.color_03,
            buttonActive: colors.color_16,
            textActive: colors.color_02,
            textParagraph: colors.color_03,
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
        }
    },
    desktop: {
        app: {},
        login: {
            borderColor: colors.color_01,
            shadowColor: colors.color_09,
            backgroundLogin: colors.color_15,
            buttonsWrapperColor: colors.color_04,
            settingsBorderBottom: colors.color_07,
            buttonHover: colors.color_15,
            textNotActive: colors.color_08,
            buttonShadow: colors.color_16,
            textForm: colors.color_03,
            buttonActive: colors.color_08,
            textActive: colors.color_14,
        },
        signIn: {
            borderColor: colors.color_01,
            shadowColor: colors.color_09,
            backgroundLogin: colors.color_15,
            buttonsWrapperColor: colors.color_04,
            settingsBorderBottom: colors.color_07,
            buttonHover: colors.color_15,
            textNotActive: colors.color_08,
            buttonShadow: colors.color_16,
            textForm: colors.color_03,
            buttonActive: colors.color_08,
            textActive: colors.color_14,
        },
        chatBlock: {
            backgroundChatBlock: colors.color_17,
            sendBotton: colors.color_15,
        },
        chatCloud: {
            messgaeBackground: colors.color_08,
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