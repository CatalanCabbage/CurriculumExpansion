/*
---------------------------------------------------------------------------
This file consists of the following:
    1. General idea
    2. Concepts to be covered
    3. Lessons break-up
---------------------------------------------------------------------------

1. General idea:
Content of the Spam keeps increasing in complexity,
requiring us to enhance the regex to detect that content.
    Example: To introduce case-insensitive flag:
    First lesson, Spam phrase: double your income
    Next lesson, Spam phrase: Double your INCOME

---------------------------------------------------------------------------
2. Concepts to be covered(not in order):
    All examples are not covered explicitly in lessons;
    however, at least one example from each concept is introduced,
    either in lessons or other documentation.

    COVERED IN      EXAMPLES/CONCEPTS
                    JS test, match, replace functions
                    JS flags/modifiers      //i(case), g(global), m(multiline)
                    (abc)                   //verbatim match
                    (abc|xyz)               //OR operator
                    [abc], [a-z]            //in range
                    [^abc], [^a-z]          //not in range
                    .                       //any, except newline
                    \w \d \W \D             //alphanumeric meta-character
                    \s \t \r \v             //space meta-character
                    \ddd \xdd \udddd        //Octal/Hexa/Unicode meta-character
                    + * ? {x,y}             //Occurrences quantifier
                    $ ^                     //Beginning/end quantifier
                    (abc)...\1 , (?:abc)    //Capturing & non-capturing groups
                    Lazy and greedy matching
                    Positive and Negative lookaheads
                    Warning: Catastrophic backtracking

---------------------------------------------------------------------------

3. Lessons break-up: (TODO)
    1.1 Try matching using String.includes method
    1.2 Try matching using String.includes method, complicated example
    1.3 Use regex for same test case as 1.2, introducing need for regex

---------------------------------------------------------------------------

 */