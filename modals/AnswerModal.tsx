import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WHITE_COLOR, PRIMARY_COLOR, PINK_COLOR } from '../constants/colors';


type AnswerModalProps = {
    visible: boolean;
    isCorrect: boolean;
    onClose: () => void;
    onContinue: () => void;
    correctAnswer: string;
};

const AnswerModal: React.FC<AnswerModalProps> = ({
    visible,
    isCorrect,
    onClose,
    onContinue,
    correctAnswer,
}) => {
    const modalBackgroundColor = isCorrect ? PRIMARY_COLOR : PINK_COLOR;
    const message = isCorrect ? 'Good Job!' : `Answer: ${correctAnswer}`;

    return (
        <Modal animationType="slide" transparent visible={visible}>
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent, { backgroundColor: modalBackgroundColor }]}>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                        <Text style={[styles.continueButtonText, !isCorrect && { color: PINK_COLOR }]}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContent: {
        width: '100%',
        paddingBottom: 20,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    message: {
        fontSize: 18,
        fontWeight: 'bold',
        color: WHITE_COLOR,
        marginTop: 20,
    },
    continueButton: {
        backgroundColor: WHITE_COLOR,
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 64,
        marginTop: 20,
    },
    continueButtonText: {
        fontSize: 18,
        color: PRIMARY_COLOR,
        textAlign: 'center',
        fontWeight: '600'
    },
});

export default AnswerModal;
