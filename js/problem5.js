"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here

function changeElementText(element, answer) {
    $(element).text(answer);
}

function advertisingTextReversal(HindiText, UrduText, EnglishText)
{

    var hindiLine = createHtmlStringFromArrayOfText(HindiText);
    var urduLine = createHtmlStringFromArrayOfText(UrduText);
    var englishLine = createHtmlStringFromArrayOfText(EnglishText);

    changeElementText("#HindiMistakeLine", hindiLine);
    changeElementText("#UrduMistakeLine", urduLine);
    changeElementText("#EnglishMistakeLine", englishLine);

    urduLine = reverseLine(UrduText);

    var correctedLine = hindiLine + urduLine + englishLine;

    changeElementText("#correctLine", correctedLine);

    var totalNumberOfWords = countWords(HindiText, UrduText, EnglishText);

    changeElementText("#wordCount", totalNumberOfWords);

}

function createHtmlStringFromArrayOfText(array)
{
    var text = "";

    for(var i = 0; i<array.length; i++)
    {
        text += array[i] + " ";
    }

    return text;
}

//Takes in an array of strings, returns a formatted line for use within the html
function reverseLine(text)
{
    var reversedText = text.reverse();

    reversedText = createHtmlStringFromArrayOfText(reversedText);
    return reversedText;
}

function countWords(hindiText, urduText, englishText)
{
    return hindiText.length + urduText.length + englishText.length;
}