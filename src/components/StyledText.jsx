import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Theme from '../Theme'

const styles = StyleSheet.create({
    text: {
        fontSize: Theme.fontSizes.body,
        color: Theme.colors.textPrimary,
        fontFamily: Theme.fonts.main,
        fontWeight: Theme.fontWeights.normal
    },

    bold: {
        fontWeight: Theme.fontWeights.bold
    },

    medium: {
        fontSize: Theme.fontSizes.medium
    },
    large: {
        fontSize: Theme.fontSizes.large
    },
    xl: {
        fontSize: Theme.fontSizes.xl
    },
    xxl: {
        fontSize: Theme.fontSizes.xxl
    },
    xxxl: {
        fontSize: Theme.fontSizes.xxxl
    },

    colorPrimary: {
        color: Theme.colors.textPrimary
    },
    
    colorSecondary: {
        color: Theme.colors.textSecondary
    },

    textCenter: {
        textAlign: "center"
    }
})


const StyledText = ({children, color, fontSize, fontWeight, align, style, ...restOfProps}) => {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'medium' && styles.medium,
        fontSize === 'large' && styles.large,
        fontSize === 'xl' && styles.xl,
        fontSize === 'xxl' && styles.xxl,
        fontSize === 'xxxl' && styles.xxxl,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textCenter,
        style
    ]
    
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}

export default StyledText