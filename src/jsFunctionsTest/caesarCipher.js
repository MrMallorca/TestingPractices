const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];

let cesarCipherWord;

function caesarCipher(string, moves)
{
    let cesarCipherWord = '';

    for (let i = 0; i < string.length; i++)
    {
        const letter = string.charAt(i);
        const lowerLetter = letter.toLowerCase();

        if (checkNonAlphabetical(lowerLetter))
        {
            cesarCipherWord += letter;
            continue;
        }

        const indexLetter =
            (alphabet.indexOf(lowerLetter) + moves) % alphabet.length;

        let encryptedLetter = alphabet[indexLetter];

        encryptedLetter = checkMayus(letter, encryptedLetter);

        cesarCipherWord += encryptedLetter;
    }

    return cesarCipherWord;
}

function checkNonAlphabetical(character)
{
    return !alphabet.includes(character);
}

function checkMayus(letter, encryptedLetter)
{
    if(letter === letter.toUpperCase() && 
       letter !== letter.toLowerCase())
    {
        return encryptedLetter.toUpperCase();
    }

    return encryptedLetter;
}
module.exports = caesarCipher;