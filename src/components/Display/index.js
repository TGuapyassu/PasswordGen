import { Box, Password, Text, Input, Button1, Indicator, Bar, Customize, Title, Actions, Passwordlenght, Slider, Container, InputContainer, Submit, Button2 } from "./styles";
import copy from '../../Assets/copy.svg';
import renew from '../../Assets/renew.svg';
import { useRef, useState } from "react";

const PasswordDisplay = () => {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(16);
    const [useUppercase, setUseUppercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);
    const fontPassword = useRef('');
    const indicatorBar = useRef('');

    const generatePassword = () => {
        let chars = 'abcdefghjkmnpqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
        const numberChars = '123456789';
        const symbolChars = '!@#$%^&*()_-+={}[];:",.<>?/|';

        if (useUppercase) {
            chars += upperCaseChars;
        }

        if (useNumbers) {
            chars += numberChars;
        }

        if (useSymbols) {
            chars += symbolChars;
        }

        let password = '';

        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        setPassword(password);
    }

    const calculateQuality = () => {
        const percent = Math.round(
            (passwordLength / 64) * 25 +
            (useUppercase ? 15 : 0) +
            (useNumbers ? 25 : 0) +
            (useSymbols ? 35 : 0)
        )

        indicatorBar.current.style.width = `${percent}%`

        if (percent > 69) {
            indicatorBar.current.classList.remove('critical')
            indicatorBar.current.classList.remove('warning')
            indicatorBar.current.classList.add('safe')
        } else if (percent > 50) {
            indicatorBar.current.classList.remove('critical')
            indicatorBar.current.classList.add('warning')
            indicatorBar.current.classList.remove('safe')
        } else {
            indicatorBar.current.classList.add('critical')
            indicatorBar.current.classList.remove('warning')
            indicatorBar.current.classList.remove('safe')
        }

        if (percent >= 100) {
            indicatorBar.current.classList.add('completed')
        } else {
            indicatorBar.current.classList.remove('completed')
        }
    }

    const calculateFontSize = () => {
        if (passwordLength > 45) {
            fontPassword.current.classList.remove('font-sm')
            fontPassword.current.classList.remove('font-xs')
            fontPassword.current.classList.add('font-xxs')
        } else if (passwordLength > 32) {
            fontPassword.current.classList.remove('font-sm')
            fontPassword.current.classList.add('font-xs')
            fontPassword.current.classList.remove('font-xxs')
        } else if (passwordLength > 22) {
            fontPassword.current.classList.add('font-sm')
            fontPassword.current.classList.remove('font-xs')
            fontPassword.current.classList.remove('font-xxs')
        } else {
            fontPassword.current.classList.remove('font-sm')
            fontPassword.current.classList.remove('font-xs')
            fontPassword.current.classList.remove('font-xxs')
        }
    }

    return (
        <>
            <Box>
                <Password>
                    <Text>
                        <Input
                            type="text"
                            name="password"
                            id="password"
                            ref={fontPassword}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Text>
                    <div>
                        <Button1 id="copy-1">
                            <img src={copy} alt="" width='42' onClick={() => navigator.clipboard.writeText(password)} />
                        </Button1>
                        <Button1 id="renew">
                            <img src={renew} alt="" width='42'
                                onClick={() => {
                                    generatePassword()
                                    calculateFontSize()
                                    calculateQuality()
                                }}
                            />
                        </Button1>
                    </div>
                </Password>
                <Indicator>
                    <Bar
                        ref={indicatorBar}
                        id="security-indicator-bar"
                    />
                </Indicator>
            </Box>
            <Customize>
                <Title>Personalizar</Title>
                <Actions>
                    <Passwordlenght>
                        <p>Tamanho: <span>{passwordLength}</span> </p>
                        <Slider
                            type="range"
                            name="password-lenght"
                            value={passwordLength}
                            min="4"
                            max="64"
                            onChange={(e) => {
                                setPasswordLength(e.target.value)
                            }}
                        />
                    </Passwordlenght>
                    <div>
                        <Container>
                            <span>Maiúsculas</span>
                            <InputContainer
                                type="checkbox"
                                id="uppercase-check"
                                checked={useUppercase}
                                onChange={(e) => setUseUppercase(e.target.checked)}
                            />
                        </Container>

                        <Container>
                            <span>Números</span>
                            <InputContainer
                                type="checkbox"
                                id="number-check"
                                checked={useNumbers}
                                onChange={(e) => setUseNumbers(e.target.checked)}
                            />
                        </Container>

                        <Container>
                            <span>Símbolos</span>
                            <InputContainer
                                type="checkbox"
                                id="symbol-check"
                                checked={useSymbols}
                                onChange={(e) => setUseSymbols(e.target.checked)}
                            />
                        </Container>
                    </div>
                </Actions>
            </Customize>
            <Submit>
                <Button2
                    onClick={() => navigator.clipboard.writeText(password)}>
                    Copiar Senha
                </Button2>
                <Button2
                    onClick={() => {
                        generatePassword()
                        calculateFontSize()
                        calculateQuality()
                    }}
                >
                    Gerar Senha
                </Button2>
            </Submit>
        </>
    );
};

export default PasswordDisplay;