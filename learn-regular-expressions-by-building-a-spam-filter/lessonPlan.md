## Lesson Plan for Regex course

##### This file consists of the following:
    1. General idea
    2. Concepts to be covered
    3. Lessons break-up
---------------------------------------------------------------------------

### General idea:
Content of the Spam keeps increasing in complexity,
requiring us to enhance the regex to detect that content.

Example: To introduce the concept of case-insensitive flag:
    
* First lesson, Spam phrase: double your income
* Second lesson, Spam phrase: Double your INCOME

---------------------------------------------------------------------------
### Concepts to be covered:
*All examples are not covered explicitly in lessons*;
however, at least one example from each concept is introduced,
either in lessons or other documentation.

|COVERED IN   |   EXAMPLES/CONCEPTS| REMARKS |
|   :------:    |   :------:   | :------:  |
|     Set 1          |JS test, match, replace functions||
|     Set 2(`i`, `g`)|JS flags/modifiers      |i(case), g(global), m(multiline), s(dotall), u(unicode), y(sticky)|
|     Set 1          |abc                     |verbatim match|
|     Set 1          |(abc|xyz)               |OR operator|
|     Set 3          |[abc], [a-z]            |in range|
|     Set 3          |[^abc], [^a-z]          |not in range|
|     Set 4          |.                       |any, except newline|
|     Set 4          |\w \d \W \D             |alphanumeric meta-character|
|     Set 4          |\s \t \r \v             |space meta-character|
|                    |\ddd \xdd \udddd        |Octal/Hexa/Unicode meta-character|
|     Set 4          |\p{property}            |Unicode Properties [ref](https://javascript.info/regexp-unicode)|
|     Set 4          |+ * ? {x,y}             |Occurrences quantifier|
|     Set 4          |$ ^                     |Beginning/end quantifier|
|                    |(abc)...\1 , (?:abc)    |Capturing & non-capturing groups|
|                    |Lazy and greedy matching||
|                    |Positive and Negative lookaheads||
|                    |Warning: Catastrophic backtracking||
|                    |Regex dynamic addition syntax||

---------------------------------------------------------------------------

### Lessons break-up:

Note: Overall to supplement this exercise and easier to grasp(just a touch of graphics that doesn't get in the way), 
<br>we could set up a css environment that looks like a mailbox with a folder called `Mails`
* For exercises like 'Find strings with spam words', we can name the folder `spam`. 
<br>On successfully matching, we can list only the matched mails.
* Similarly, for exercises like 'Find strings without spam words', we can name the folder `inbox`
<br>On successfully matching, we can list only the matched mails.
  
 
----------

##### **Lesson Set 1: Basics, intro to regex**
1. Maybe a gentle infographic/intro about the purpose of a spam filter
2. Try matching `str` using `str.includes(substring)` method
    * Question: Test if `str` has the word: `money`
3. Try matching `str` using `str.includes(substring)` method, tedious example (different `str`)
    * Question: Test if `str` has the words: `[money, cash, moolah]`
4. Use regex to test `str`; gentle introduction for syntax using `test`.
    * `regex = /money/`, 
5. Use regex to **test** `str`: introduces basic regex (syntax noticably shorter than `includes`)
    * `regex = /money|cash|moolah/` and `result = regex.test(str)`, show that `result` is `boolean`
6. Use regex to **match** `str` 
    * Question: Find *which* word was matched exactly (demonstrates need for regex over just string functions)
    * `regex = /money|cash|moolah/` and `result = str.match(regex)`, show that `result` is an `array` that has the match and print it
 
Note: Maybe just add a side note reg other similar functions (`replace`, etc) [reference](https://javascript.info/regexp-methods)


##### **Lesson Set 2: Intro to regex Flags/Modifiers**
1. Introduce flags syntax and flag `i` with text with mixed-case characters.
    * `regex = /money|cash|moolah/i`
2. Introduce flag `g` for multiple matches, also multiple flags(both `i` and `g`).
    * Question: List all words matching the `regex` that appear in `str`
    * `regex = /money|cash|moolah/i` and `result = str.match(regex)`, `result` gives 1
    * `regex = /money|cash|moolah/ig` and `result = str.match(regex)`, `result` gives `array` of matches
3. To reinforce the previous `g` flag: How many times do words in `regex` appear in `str`?
    * `regex = /money|cash|moolah/ig` and `result = str.match(regex)`, `result.length` gives `n`(total matches)

Note: Only `i` and `g` are introduced; `m`, `s`, `u`, and `y` cannot be contextually introduced at this point.

##### **Lesson Set 3: Introduction to regex sets/range**
1. Introduce alternate characters: `[xyz]` matches any of the 3 characters, `x`, `y` or `z`
    * Question: The scammers now use `@` instead of `a`; find matches.
    * `regex = /money|c[a@]sh|mool[a@]h/gi`, to match `c@sh`, `mool@h` in addition to previous matches
2. Introduce range: `[a-z0-9]` matches `a` through `z`, `[0-5]` matches `0` through `5`, and also chaining: `[a-df-h] == [abcdfgh]` 
    * You're expecting a mail from your bank; thus, you cannot filter all instances of 'money'. 
    <br>Instead, filter only instances where the character before 'money' is not a space.
    <br>Also, you've subscribed to mails from YoungMoney; exclude instances where `g` is present before `money`, like in `YoungMoney`
    * Requirement: Match: `earnMoney, lotsOfMoney, MoneyMoney`; don't match: `received money, got money, youngMoney`, etc 
    * `regex = /[a-fh-z0-9]money/` (including only the main part)
3. Introduce number of occurrence: `[a]{0, n}` matches `a` from `0` to `n` times
    * Requirement: Previous filter lets both `get money` and `get moneyyyy` through; block instances where last letter is repeated
    * `regex = /[a-fh-z0-9]mone[y]{1}/gi`
4. Introduce the 'not' `^` operator: `[^abc]` matches all characters that are not `a`, `b` or `c`
    * Requirement: Allow the word `cash` only when not followed immediately by `h` 
    <br>Eg: Allow the word `cash, cashflow, cashed, cash-strapped`, and block `cashhh`
    * `regex = /c[a@]sh[^h]/gi`

Note: I prefer `match` to `test` , since it's easier for students 
<br>to debug using `match` (they'll know what exactly is matching the regex)

Also, complicated requirements are better put graphically, easy to grasp

##### **Lesson Set 4: Introduction to meta-characters/quantifiers**
1.  Introduce the dot `.` character that matches with any character except newline. To match periods `.` literally, `\.` is required.
    * Requirement: Match `earn` followed by `quick` in a string. Assume there are `< 20` chars between them.
    <br> Eg. Match `earn lots and lots quick!`, `earn $$ quickly`, etc.
    * `regex = /earn[.]{0,20}quick/gi`
2.  Introduce location quantifiers: Starts-with `^`, Ends-with `$` and Word-Boundary `\b`
    * Requirement: Match mails with the word `lot`, or ends with `now`.
    <br>Eg. Match `lot` or `buy it now`, don't match `slot`, `lots`, `zealot`, ets
    * `regex = /[\b]lot[\b]|now$/gi`    
3.  Introduce the `\s \d \w` meta-characters that match any space, digit and alphabets respectively.
    * Requirement: Previous regex matches `learn stuff quick!`; 
    <br>make it match only if there's a `space` char before `earn` so that it doesn't match `learn`
    * `regex = /[\s]earn[.]{0,20}quick/gi`
4.  Introduce the occurrences quantifiers `*`, `+` and `?`:
    * Requirement: Match all words with numbers anywhere in the middle. Eg. `we1ght l0ss c4sh`
    * `regex = /[\w]+\d[\w]+/gi`
5.  Reinforce the previous concepts for a few more exercises.
    <br>More similar exercises need to be added here for practice; add popular examples like IP, URL, etc.
    * Requirement: Match emails having the word `ad` in the name, number in the domain and xyz as TLD
    * Eg: Match `quickads@newy0rktimes.xyz`
    * `regex = /[\d\w]*ad[\d\w]*@[\w]*\d[\w]*\.xyz/gi`
6.  Introduce Unicode properties meta-character `\p{...}` and Unicode flag `/u`. Add reference to list of characters.
    * Why? Required to be able to match all languages and symbols.
    <br>`\w`, the word meta-character matches only ASCII English text. Doesn't match `á`, for example.
    * Match all words with numbers anywhere in the middle. Eg. `wé1ght cáa4sh fr3é s1óck mil1ioñs`
    * `regex = /[\p{L}]+\d[\p{L}]+/gui`

##### **Lesson Set 5: Introduction to capturing groups**
Todo


##### **Lesson Set 6: Useful concepts, further study**
1.  Positive and Negative lookaheads
2.  Catastrophic backtracking
3.  Lazy and greedy matching
4.  Regex dynamic addition syntax
5.  Dot, multi-line flag




---------------------------------------------------------------------------
