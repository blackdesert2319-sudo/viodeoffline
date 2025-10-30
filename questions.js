// Đây là tệp 'questions.js'
// Tệp này CHỈ chứa thư viện câu hỏi

const questions = [
    // === DẠNG 1: TRẮC NGHIỆM (ĐẾM) - 100 câu ===
    // Nhóm 1: Âm đơn
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "b" trong câu: Ba bế bé.',
        speakText: 'Có bao nhiêu âm bờ trong câu: Ba bế bé.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "e" trong câu: Ba bế bé.',
        speakText: 'Có bao nhiêu vần e trong câu: Ba bế bé.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "o" trong câu: Bò có cỏ.',
        speakText: 'Có bao nhiêu vần o trong câu: Bò có cỏ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "c" trong câu: Bò có cỏ.',
        speakText: 'Có bao nhiêu âm cờ trong câu: Bò có cỏ.',
        options: ['A. 2', 'B. 1', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "c" trong câu: Bé có cá cờ.',
        speakText: 'Có bao nhiêu âm cờ trong câu: Bé có cá cờ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "a" trong câu: Bé có cá cờ.',
        speakText: 'Có bao nhiêu vần a trong câu: Bé có cá cờ.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "đ" trong câu: Dì đi đò.',
        speakText: 'Có bao nhiêu âm đờ trong câu: Dì đi đò.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "i" trong câu: Dì đi đò.',
        speakText: 'Có bao nhiêu vần i trong câu: Dì đi đò.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "e" trong câu: Bé vẽ cờ đỏ.',
        speakText: 'Có bao nhiêu vần e trong câu: Bé vẽ cờ đỏ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "o" trong câu: Bé vẽ cờ đỏ.',
        speakText: 'Có bao nhiêu vần o trong câu: Bé vẽ cờ đỏ.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "v" trong câu: Ve kêu ve ve.',
        speakText: 'Có bao nhiêu âm vờ trong câu: Ve kêu ve ve.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "e" trong câu: Ve kêu ve ve.',
        speakText: 'Có bao nhiêu vần e trong câu: Ve kêu ve ve.',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 1'],
        correctAnswer: 'B. 3'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "g" trong câu: Bé có ghế gỗ.',
        speakText: 'Có bao nhiêu âm gờ trong câu: Bé có ghế gỗ.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ô" trong câu: Bé có ghế gỗ.',
        speakText: 'Có bao nhiêu vần ô trong câu: Bé có ghế gỗ.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "a" trong câu: Nhà có giỗ.',
        speakText: 'Có bao nhiêu vần a trong câu: Nhà có giỗ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ô" trong câu: Nhà có giỗ.',
        speakText: 'Có bao nhiêu vần ô trong câu: Nhà có giỗ.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "b" trong câu: Bé bi bô.',
        speakText: 'Có bao nhiêu âm bờ trong câu: Bé bi bô.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "i" trong câu: Bé bi bô.',
        speakText: 'Có bao nhiêu vần i trong câu: Bé bi bô.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "o" trong câu: Bà cho bé giò.',
        speakText: 'Có bao nhiêu vần o trong câu: Bà cho bé giò.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "b" trong câu: Bà cho bé giò.',
        speakText: 'Có bao nhiêu âm bờ trong câu: Bà cho bé giò.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1'
    },

    // Nhóm 2: Âm đơn
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "k" trong câu: Kì đà bò ở kẽ đá.',
        speakText: 'Có bao nhiêu âm ca trong câu: Kì đà bò ở kẽ đá.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "a" trong câu: Kì đà bò ở kẽ đá.',
        speakText: 'Có bao nhiêu vần a trong câu: Kì đà bò ở kẽ đá.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "e" trong câu: Bé có Nơ.',
        speakText: 'Có bao nhiêu vần e trong câu: Bé có Nơ.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ơ" trong câu: Bé có Nơ.',
        speakText: 'Có bao nhiêu vần ơ trong câu: Bé có Nơ.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "t" trong câu: Bố có ô tô.',
        speakText: 'Có bao nhiêu âm tờ trong câu: Bố có ô tô.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ô" trong câu: Bố có ô tô.',
        speakText: 'Có bao nhiêu vần ô trong câu: Bố có ô tô.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "n" trong câu: Lá mạ non.',
        speakText: 'Có bao nhiêu âm nờ trong câu: Lá mạ non.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "a" trong câu: Lá mạ non.',
        speakText: 'Có bao nhiêu vần a trong câu: Lá mạ non.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "m" trong câu: Mẹ có lọ mơ.',
        speakText: 'Có bao nhiêu âm mờ trong câu: Mẹ có lọ mơ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "o" trong câu: Mẹ có lọ mơ.',
        speakText: 'Có bao nhiêu vần o trong câu: Mẹ có lọ mơ.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "n" trong câu: Bà cho bé na.',
        speakText: 'Có bao nhiêu âm nờ trong câu: Bà cho bé na.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "a" trong câu: Bà cho bé na.',
        speakText: 'Có bao nhiêu vần a trong câu: Bà cho bé na.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "b" trong câu: Bố đi bộ.',
        speakText: 'Có bao nhiêu âm bờ trong câu: Bố đi bộ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ô" trong câu: Bố đi bộ.',
        speakText: 'Có bao nhiêu vần ô trong câu: Bố đi bộ.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "l" trong câu: Chợ có đỗ, có lạc.',
        speakText: 'Có bao nhiêu âm lờ trong câu: Chợ có đỗ, có lạc.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "o" trong câu: Chợ có đỗ, có lạc.',
        speakText: 'Có bao nhiêu vần o trong câu: Chợ có đỗ, có lạc.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ô" trong câu: Bé tập tô.',
        speakText: 'Có bao nhiêu vần ô trong câu: Bé tập tô.',
    },
    // dạng 2
    // === DẠNG 2: BẤM TÌM (GẠCH CHÂN) - 100 câu ===
// (Nối tiếp vào sau Dạng 1)
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Ba bế bé.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "c" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm cờ trong câu sau:',
    sentence: 'Bò có cỏ.',
    correctAnswers: ['c']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Bé có cá cờ.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "c" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm cờ trong câu sau:',
    sentence: 'Bé có cá cờ.',
    correctAnswers: ['c']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "d" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm dờ trong câu sau:',
    sentence: 'Dì đi đò.',
    correctAnswers: ['d']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "đ" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm đờ trong câu sau:',
    sentence: 'Dì đi đò.',
    correctAnswers: ['đ']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "v" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm vờ trong câu sau:',
    sentence: 'Bé vẽ cờ đỏ.',
    correctAnswers: ['v']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "c" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm cờ trong câu sau:',
    sentence: 'Bé vẽ cờ đỏ.',
    correctAnswers: ['c']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "v" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm vờ trong câu sau:',
    sentence: 'Ve kêu ve ve.',
    correctAnswers: ['v']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "k" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm ca trong câu sau:',
    sentence: 'Ve kêu ve ve.',
    correctAnswers: ['k']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "gh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm gờ ghép trong câu sau:',
    sentence: 'Bé có ghế gỗ.',
    correctAnswers: ['gh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "g" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm gờ trong câu sau:',
    sentence: 'Bé có ghế gỗ.',
    correctAnswers: ['g']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Nhà có giỗ.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "gi" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm gi trong câu sau:',
    sentence: 'Nhà có giỗ.',
    correctAnswers: ['gi']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Bé bi bô.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Bà cho bé giò.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "gi" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm gi trong câu sau:',
    sentence: 'Bà cho bé giò.',
    correctAnswers: ['gi']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "k" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm ca trong câu sau:',
    sentence: 'Kì đà bò ở kẽ đá.',
    correctAnswers: ['k']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "đ" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm đờ trong câu sau:',
    sentence: 'Kì đà bò ở kẽ đá.',
    correctAnswers: ['đ']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "n" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nờ trong câu sau:',
    sentence: 'Bé có Nơ.',
    correctAnswers: ['n']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "t" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm tờ trong câu sau:',
    sentence: 'Bố có ô tô.',
    correctAnswers: ['t']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Bố có ô tô.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
    sentence: 'Lá mạ non.',
    correctAnswers: ['l']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "n" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nờ trong câu sau:',
    sentence: 'Lá mạ non.',
    correctAnswers: ['n']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "m" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm mờ trong câu sau:',
    sentence: 'Mẹ có lọ mơ.',
    correctAnswers: ['m']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
    sentence: 'Mẹ có lọ mơ.',
    correctAnswers: ['l']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "n" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nờ trong câu sau:',
    sentence: 'Bà cho bé na.',
    correctAnswers: ['n']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Bà cho bé na.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Bố đi bộ.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "đ" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm đờ trong câu sau:',
    sentence: 'Bố đi bộ.',
    correctAnswers: ['đ']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Chợ có đỗ, có lạc.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
    sentence: 'Chợ có đỗ, có lạc.',
    correctAnswers: ['l']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "t" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm tờ trong câu sau:',
    sentence: 'Bé tập tô.',
    correctAnswers: ['t']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Bé tập tô.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Mẹ đi chợ Bờ.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Mẹ đi chợ Bờ.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Mẹ đi chợ.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "m" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm mờ trong câu sau:',
    sentence: 'Mẹ đi chợ.',
    correctAnswers: ['m']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ngh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm ngờ ghép trong câu sau:',
    sentence: 'Bé nghỉ hè.',
    correctAnswers: ['ngh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "h" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm hờ trong câu sau:',
    sentence: 'Bé nghỉ hè.',
    correctAnswers: ['h']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Nhà bé ở phố.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ph" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm phờ trong câu sau:',
    sentence: 'Nhà bé ở phố.',
    correctAnswers: ['ph']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ph" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm phờ trong câu sau:',
    sentence: 'Bố ăn phở.',
    correctAnswers: ['ph']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Bố ăn phở.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Chú chó nhỏ.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Chú chó nhỏ.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Nhà bà có tre.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "tr" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm trờ trong câu sau:',
    sentence: 'Nhà bà có tre.',
    correctAnswers: ['tr']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ngh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm ngờ ghép trong câu sau:',
    sentence: 'Bé nghĩ gì thế?',
    correctAnswers: ['ngh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "gi" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm gi trong câu sau:',
    sentence: 'Bé nghĩ gì thế?',
    correctAnswers: ['gi']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Quả na, quả nho.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "qu" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm quờ trong câu sau:',
    sentence: 'Quả na, quả nho.',
    correctAnswers: ['qu']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "th" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm thờ trong câu sau:',
    sentence: 'Thỏ tha bó cỏ.',
    correctAnswers: ['th']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Thỏ tha bó cỏ.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Cả nhà đi nghỉ mát.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ngh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm ngờ ghép trong câu sau:',
    sentence: 'Cả nhà đi nghỉ mát.',
    correctAnswers: ['ngh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Nhà sàn có lan can.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "c" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm cờ trong câu sau:',
    sentence: 'Nhà sàn có lan can.',
    correctAnswers: ['c']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "m" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm mờ trong câu sau:',
    sentence: 'Mẹ mua làn có quai.',
    correctAnswers: ['m']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "qu" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm quờ trong câu sau:',
    sentence: 'Mẹ mua làn có quai.',
    correctAnswers: ['qu']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "h" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm hờ trong câu sau:',
    sentence: 'Bé hát ca vang.',
    correctAnswers: ['h']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "v" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm vờ trong câu sau:',
    sentence: 'Bé hát ca vang.',
    correctAnswers: ['v']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Cả nhà làm Rô bốt.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
    sentence: 'Cả nhà làm Rô bốt.',
    correctAnswers: ['l']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "v" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm vờ trong câu sau:',
    sentence: 'Con vẹt có mỏ nhọn.',
    correctAnswers: ['v']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Con vẹt có mỏ nhọn.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "đ" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm đờ trong câu sau:',
    sentence: 'Đàn cò bay lượn.',
    correctAnswers: ['đ']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
    sentence: 'Đàn cò bay lượn.',
    correctAnswers: ['l']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "m" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm mờ trong câu sau:',
    sentence: 'Cơm mạ thơm.',
    correctAnswers: ['m']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "th" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm thờ trong câu sau:',
    sentence: 'Cơm mạ thơm.',
    correctAnswers: ['th']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Bé đi chọp chẹp.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Bé đi chọp chẹp.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "nh" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nhờ trong câu sau:',
    sentence: 'Nhà bé có xà bần.',
    correctAnswers: ['nh']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "x" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm xờ trong câu sau:',
    sentence: 'Nhà bé có xà bần.',
    correctAnswers: ['x']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
    sentence: 'Lớp bé họp tổ.',
    correctAnswers: ['l']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "h" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm hờ trong câu sau:',
    sentence: 'Lớp bé họp tổ.',
    correctAnswers: ['h']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "qu" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm quờ trong câu sau:',
    sentence: 'Quê bé có tre, có trúc.',
    correctAnswers: ['qu']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "tr" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm trờ trong câu sau:',
    sentence: 'Quê bé có tre, có trúc.',
    correctAnswers: ['tr']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
    sentence: 'Bé đi qua cầu.',
    correctAnswers: ['b']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "qu" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm quờ trong câu sau:',
    sentence: 'Bé đi qua cầu.',
    correctAnswers: ['qu']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "c" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm cờ trong câu sau:',
    sentence: 'Cây nêu cao.',
    correctAnswers: ['c']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "n" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm nờ trong câu sau:',
    sentence: 'Cây nêu cao.',
    correctAnswers: ['n']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "m" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm mờ trong câu sau:',
    sentence: 'Mẹ mua dưa, mua mía.',
    correctAnswers: ['m']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "d" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm dờ trong câu sau:',
    sentence: 'Mẹ mua dưa, mua mía.',
    correctAnswers: ['d']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "c" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm cờ trong câu sau:',
    sentence: 'Con cua đá.',
    correctAnswers: ['c']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "đ" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm đờ trong câu sau:',
    sentence: 'Con cua đá.',
    correctAnswers: ['đ']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "r" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm rờ trong câu sau:',
    sentence: 'Con rùa bò chậm.',
    correctAnswers: ['r']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Con rùa bò chậm.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "tr" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm trờ trong câu sau:',
    sentence: 'Bầy trâu gặm cỏ.',
    correctAnswers: ['tr']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "g" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm gờ trong câu sau:',
    sentence: 'Bầy trâu gặm cỏ.',
    correctAnswers: ['g']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
    sentence: 'Tia chớp sáng lòa.',
    correctAnswers: ['ch']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
    sentence: 'Tia chớp sáng lòa.',
    correctAnswers: ['l']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "th" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm thờ trong câu sau:',
    sentence: 'Thuyền buồm đi xa.',
    correctAnswers: ['th']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "x" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm xờ trong câu sau:',
    sentence: 'Thuyền buồm đi xa.',
    correctAnswers: ['x']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
    sentence: 'Lúa quê em mượt mà.',
    correctAnswers: ['l']
},
{
    type: 'click_and_find',
    questionText: 'Bấm vào tất cả các âm "qu" trong câu sau:',
    speakText: 'Bé hãy bấm vào tất cả các âm quờ trong câu sau:',
    sentence: 'Lúa quê em mượt mà.',
    correctAnswers: ['qu']
}
// Vẫn còn 100 câu Dạng 1 ở trên nhé
// Bạn sẽ dán 300 câu hỏi tiếp theo vào bên dưới
    // === DẠNG 3: TRẮC NGHIỆM (ĐIỀN TỪ & NHẬN DIỆN) - 100 câu ===
// (Nối tiếp vào sau Dạng 2)

// --- 50 câu 3A (Điền từ - Chính tả) ---
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...ú mèo.',
    speakText: 'Bé hãy chọn âm chờ hay âm trờ để điền vào chỗ trống: ...ú mèo.',
    options: ['A. ch', 'B. tr'],
    correctAnswer: 'A. ch'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...e xanh.',
    speakText: 'Bé hãy chọn âm chờ hay âm trờ để điền vào chỗ trống: ...e xanh.',
    options: ['A. ch', 'B. tr'],
    correctAnswer: 'B. tr'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: Cái ...ô.',
    speakText: 'Bé hãy chọn âm sờ hay âm xờ để điền vào chỗ trống: Cái ...ô.',
    options: ['A. s', 'B. x'],
    correctAnswer: 'B. x'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: Chim ...ẻ.',
    speakText: 'Bé hãy chọn âm sờ hay âm xờ để điền vào chỗ trống: Chim ...ẻ.',
    options: ['A. s', 'B. x'],
    correctAnswer: 'A. s'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: Dòng ...ông.',
    speakText: 'Bé hãy chọn âm sờ hay âm xờ để điền vào chỗ trống: Dòng ...ông.',
    options: ['A. s', 'B. x'],
    correctAnswer: 'A. s'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...a xôi.',
    speakText: 'Bé hãy chọn âm sờ hay âm xờ để điền vào chỗ trống: ...a xôi.',
    options: ['A. s', 'B. x'],
    correctAnswer: 'B. x'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: Mẹ ...uộm tóc.',
    speakText: 'Bé hãy chọn âm nhờ hay âm ngờ để điền vào chỗ trống: Mẹ ...uộm tóc.',
    options: ['A. n', 'B. ng'],
    correctAnswer: 'B. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: Cái ...ồi.',
    speakText: 'Bé hãy chọn âm nhờ hay âm ngờ để điền vào chỗ trống: Cái ...ồi.',
    options: ['A. n', 'B. ng'],
    correctAnswer: 'A. n'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...on ...ê.',
    speakText: 'Bé hãy chọn âm giờ hay âm dờ để điền vào chỗ trống: ...on ...ê.',
    options: ['A. d', 'B. gi'],
    correctAnswer: 'B. gi'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: Hạt ...ẻ.',
    speakText: 'Bé hãy chọn âm giờ hay âm dờ để điền vào chỗ trống: Hạt ...ẻ.',
    options: ['A. d', 'B. gi'],
    correctAnswer: 'A. d'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...à ...ơi.',
    speakText: 'Bé hãy chọn âm rờ hay âm giờ để điền vào chỗ trống: ...à ...ơi.',
    options: ['A. r', 'B. gi'],
    correctAnswer: 'A. r'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...ao ...iếc.',
    speakText: 'Bé hãy chọn âm rờ hay âm giờ để điền vào chỗ trống: ...ao ...iếc.',
    options: ['A. r', 'B. gi'],
    correctAnswer: 'B. gi'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...a ...ào.',
    speakText: 'Bé hãy chọn âm rờ hay âm dờ để điền vào chỗ trống: ...a ...ào.',
    options: ['A. r', 'B. d'],
    correctAnswer: 'A. r'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...a ...ẻ.',
    speakText: 'Bé hãy chọn âm rờ hay âm dờ để điền vào chỗ trống: ...a ...ẻ.',
    options: ['A. r', 'B. d'],
    correctAnswer: 'B. d'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...ỗ ...àng.',
    speakText: 'Bé hãy chọn âm rờ hay âm giờ để điền vào chỗ trống: ...ỗ ...àng.',
    options: ['A. r', 'B. gi'],
    correctAnswer: 'A. r'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: Hoa ...an.',
    speakText: 'Bé hãy chọn âm lờ hay âm nờ để điền vào chỗ trống: Hoa ...an.',
    options: ['A. l', 'B. n'],
    correctAnswer: 'A. l'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...o ...ê.',
    speakText: 'Bé hãy chọn âm lờ hay âm nờ để điền vào chỗ trống: ...o ...ê.',
    options: ['A. l', 'B. n'],
    correctAnswer: 'B. n'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: Cái ...á.',
    speakText: 'Bé hãy chọn âm lờ hay âm nờ để điền vào chỗ trống: Cái ...á.',
    options: ['A. l', 'B. n'],
    correctAnswer: 'B. n'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn âm đúng để điền vào chỗ trống: ...o ...ắng.',
    speakText: 'Bé hãy chọn âm lờ hay âm nờ để điền vào chỗ trống: ...o ...ắng.',
    options: ['A. l', 'B. n'],
    correctAnswer: 'A. l'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Con k...n.',
    speakText: 'Bé hãy chọn vần iên hay vần yên để điền vào chỗ trống: Con k...n.',
    options: ['A. iên', 'B. yên'],
    correctAnswer: 'A. iên'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Ch...n ...ấu.',
    speakText: 'Bé hãy chọn vần iên hay vần yên để điền vào chỗ trống: Ch...n ...ấu.',
    options: ['A. iên', 'B. yên'],
    correctAnswer: 'A. iên'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Cái ...u.',
    speakText: 'Bé hãy chọn vần iu hay vần yêu để điền vào chỗ trống: Cái ...u.',
    options: ['A. iu', 'B. yêu'],
    correctAnswer: 'A. iu'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: ... ...thương.',
    speakText: 'Bé hãy chọn vần iu hay vần yêu để điền vào chỗ trống: ... ...thương.',
    options: ['A. iu', 'B. yêu'],
    correctAnswer: 'B. yêu'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Qu...n ...o.',
    speakText: 'Bé hãy chọn vần uôn hay vần uông để điền vào chỗ trống: Qu...n ...o.',
    options: ['A. uôn', 'B. uông'],
    correctAnswer: 'B. uông'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: C...n c...a.',
    speakText: 'Bé hãy chọn vần uôn hay vần uông để điền vào chỗ trống: C...n c...a.',
    options: ['A. uôn', 'B. uông'],
    correctAnswer: 'B. uông'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: B...n ...àng.',
    speakText: 'Bé hãy chọn vần uôn hay vần uông để điền vào chỗ trống: B...n ...àng.',
    options: ['A. uôn', 'B. uông'],
    correctAnswer: 'A. uôn'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: L...n ...uôn.',
    speakText: 'Bé hãy chọn vần uôn hay vần uông để điền vào chỗ trống: L...n ...uôn.',
    options: ['A. uôn', 'B. uông'],
    correctAnswer: 'A. uôn'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: C...n v...t.',
    speakText: 'Bé hãy chọn vần on hay vần ot để điền vào chỗ trống: C...n v...t.',
    options: ['A. on', 'B. ot'],
    correctAnswer: 'A. on'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: H... h...t.',
    speakText: 'Bé hãy chọn vần on hay vần ot để điền vào chỗ trống: H... h...t.',
    options: ['A. on', 'B. ot'],
    correctAnswer: 'B. ot'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Quả ...t.',
    speakText: 'Bé hãy chọn vần ơt hay vần ơc để điền vào chỗ trống: Quả ...t.',
    options: ['A. ơt', 'B. ơc'],
    correctAnswer: 'A. ơt'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Đ...ng c....',
    speakText: 'Bé hãy chọn vần ơt hay vần ơc để điền vào chỗ trống: Đ...ng c....',
    options: ['A. ơt', 'B. ơc'],
    correctAnswer: 'B. ơc'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: C...m ...ơm.',
    speakText: 'Bé hãy chọn vần om hay vần ơm để điền vào chỗ trống: C...m ...ơm.',
    options: ['A. om', 'B. ơm'],
    correctAnswer: 'B. ơm'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Đ... ...óm.',
    speakText: 'Bé hãy chọn vần om hay vần ơm để điền vào chỗ trống: Đ... ...óm.',
    options: ['A. om', 'B. ơm'],
    correctAnswer: 'A. om'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Th...m ...a.',
    speakText: 'Bé hãy chọn vần ôm hay vần am để điền vào chỗ trống: Th...m ...a.',
    options: ['A. ôm', 'B. am'],
    correctAnswer: 'B. am'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Ch... ...ôm.',
    speakText: 'Bé hãy chọn vần ôm hay vần am để điền vào chỗ trống: Ch... ...ôm.',
    options: ['A. ôm', 'B. am'],
    correctAnswer: 'A. ôm'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: M...t m...t.',
    speakText: 'Bé hãy chọn vần at hay vần ap để điền vào chỗ trống: M...t m...t.',
    options: ['A. at', 'B. ap'],
    correctAnswer: 'A. at'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Th...p ...èn.',
    speakText: 'Bé hãy chọn vần at hay vần ap để điền vào chỗ trống: Th...p ...èn.',
    options: ['A. at', 'B. ap'],
    correctAnswer: 'B. ap'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: B...t c...p.',
    speakText: 'Bé hãy chọn vần ăt hay vần ăp để điền vào chỗ trống: B...t c...p.',
    options: ['A. ăt', 'B. ăp'],
    correctAnswer: 'A. ăt'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: G...p ...ỡ.',
    speakText: 'Bé hãy chọn vần ăt hay vần ăp để điền vào chỗ trống: G...p ...ỡ.',
    options: ['A. ăt', 'B. ăp'],
    correctAnswer: 'B. ăp'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: M...c ...nh.',
    speakText: 'Bé hãy chọn vần âc hay vần âp để điền vào chỗ trống: M...c ...nh.',
    options: ['A. âc', 'B. âp'],
    correctAnswer: 'A. âc'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: T...p ...ọc.',
    speakText: 'Bé hãy chọn vần âc hay vần âp để điền vào chỗ trống: T...p ...ọc.',
    options: ['A. âc', 'B. âp'],
    correctAnswer: 'B. âp'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: C...m ...i.',
    speakText: 'Bé hãy chọn vần am hay vần ap để điền vào chỗ trống: C...m ...i.',
    options: ['A. am', 'B. ap'],
    correctAnswer: 'A. am'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Ng...n n...p.',
    speakText: 'Bé hãy chọn vần ăn hay vần ăp để điền vào chỗ trống: Ng...n n...p.',
    options: ['A. ăn', 'B. ăp'],
    correctAnswer: 'A. ăn'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: L...n b...nh.',
    speakText: 'Bé hãy chọn vần ăn hay vần anh để điền vào chỗ trống: L...n b...nh.',
    options: ['A. ăn', 'B. anh'],
    correctAnswer: 'A. ăn'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: H...nh ...a.',
    speakText: 'Bé hãy chọn vần ăn hay vần anh để điền vào chỗ trống: H...nh ...a.',
    options: ['A. ăn', 'B. anh'],
    correctAnswer: 'B. anh'
},
{
    type:'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: T... l...nh.',
    speakText: 'Bé hãy chọn vần in hay vần inh để điền vào chỗ trống: T... l...nh.',
    options: ['A. in', 'B. inh'],
    correctAnswer: 'A. in'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: K...nh ...ọc.',
    speakText: 'Bé hãy chọn vần in hay vần inh để điền vào chỗ trống: K...nh ...ọc.',
    options: ['A. in', 'B. inh'],
    correctAnswer: 'B. inh'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Ph...m ...i.',
    speakText: 'Bé hãy chọn vần im hay vần iêm để điền vào chỗ trống: Ph...m ...i.',
    options: ['A. im', 'B. iêm'],
    correctAnswer: 'A. im'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Lúa ch...m.',
    speakText: 'Bé hãy chọn vần im hay vần iêm để điền vào chỗ trống: Lúa ch...m.',
    options: ['A. im', 'B. iêm'],
    correctAnswer: 'B. iêm'
},
{
    type: 'multiple_choice',
    questionText: 'Chọn vần đúng để điền vào chỗ trống: Trái ...m.',
    speakText: 'Bé hãy chọn vần im hay vần iêm để điền vào chỗ trống: Trái ...m.',
    options: ['A. im', 'B. iêm'],
    correctAnswer: 'A. im'
},

// --- 50 câu 3B (Nhận diện tiếng) ---
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "a"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm a?',
    options: ['A. bé', 'B. bà', 'C. bi', 'D. bò'],
    correctAnswer: 'B. bà'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "o"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm o?',
    options: ['A. na', 'B. đi', 'C. cỏ', 'D. ve'],
    correctAnswer: 'C. cỏ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ô"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm ô?',
    options: ['A. ghế', 'B. giỗ', 'C. đò', 'D. lá'],
    correctAnswer: 'B. giỗ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "e"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm e?',
    options: ['A. cá', 'B. cờ', 'C. cọ', 'D. ve'],
    correctAnswer: 'D. ve'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ê"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm ê?',
    options: ['A. ghế', 'B. gỗ', 'C. gà', 'D. gụ'],
    correctAnswer: 'A. ghế'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "i"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm i?',
    options: ['A. mẹ', 'B. na', 'C. bi', 'D. tô'],
    correctAnswer: 'C. bi'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ư"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm ư?',
    options: ['A. cờ', 'B. cá', 'C. cọ', 'D. cư'],
    correctAnswer: 'D. cư'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "u"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm u?',
    options: ['A. tre', 'B. thú', 'C. thị', 'D. thơ'],
    correctAnswer: 'B. thú'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ơ"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm ơ?',
    options: ['A. nơ', 'B. na', 'C. ni', 'D. ne'],
    correctAnswer: 'A. nơ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ă"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm á?',
    options: ['A. măng', 'B. mang', 'C. mâng', 'D. mong'],
    correctAnswer: 'A. măng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "â"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm ớ?',
    options: ['A. can', 'B. cân', 'C. cơn', 'D. con'],
    correctAnswer: 'B. cân'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ch"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm chờ?',
    options: ['A. tre', 'B. cha', 'C. tra', 'D. ca'],
    correctAnswer: 'B. cha'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "tr"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm trờ?',
    options: ['A. tre', 'B. che', 'C. xe', 'D. se'],
    correctAnswer: 'A. tre'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "s"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm sờ?',
    options: ['A. xa', 'B. sa', 'C. cha', 'D. ta'],
    correctAnswer: 'B. sa'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "x"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm xờ?',
    options: ['A. sa', 'B. xa', 'C. tra', 'D. tha'],
    correctAnswer: 'B. xa'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "l"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm lờ?',
    options: ['A. na', 'B. la', 'C. ma', 'D. ba'],
    correctAnswer: 'B. la'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "n"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm nờ?',
    options: ['A. lá', 'B. no', 'C. lo', 'D. mò'],
    correctAnswer: 'B. no'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "g"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm gờ?',
    options: ['A. ga', 'B. ca', 'C. ka', 'D. qua'],
    correctAnswer: 'A. ga'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "gh"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm gờ ghép?',
    options: ['A. ga', 'B. go', 'C. gu', 'D. ghế'],
    correctAnswer: 'D. ghế'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "c"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm cờ?',
    options: ['A. ke', 'B. kê', 'C. ki', 'D. co'],
    correctAnswer: 'D. co'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "k"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm ca?',
    options: ['A. ca', 'B. co', 'C. cu', 'D. kẻ'],
    correctAnswer: 'D. kẻ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ng"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm ngờ?',
    options: ['A. nga', 'B. nghe', 'C. nghi', 'D. na'],
    correctAnswer: 'A. nga'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ngh"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm ngờ ghép?',
    options: ['A. ngã', 'B. ngõ', 'C. ngừ', 'D. nghĩ'],
    correctAnswer: 'D. nghĩ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "nh"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm nhờ?',
    options: ['A. na', 'B. nha', 'C. nga', 'D. la'],
    correctAnswer: 'B. nha'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "ph"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm phờ?',
    options: ['A. ve', 'B. ba', 'C. fa', 'D. phở'],
    correctAnswer: 'D. phở'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "th"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm thờ?',
    options: ['A. ta', 'B. tha', 'C. tra', 'D. kha'],
    correctAnswer: 'B. tha'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "kh"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm khờ?',
    options: ['A. ca', 'B. ga', 'C. kha', 'D. ha'],
    correctAnswer: 'C. kha'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "qu"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm quờ?',
    options: ['A. ca', 'B. cu', 'C. qua', 'D. oai'],
    correctAnswer: 'C. qua'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "gi"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm gi?',
    options: ['A. da', 'B. ra', 'C. gia', 'D. va'],
    correctAnswer: 'C. gia'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "d"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm dờ?',
    options: ['A. da', 'B. ra', 'C. gia', 'D. va'],
    correctAnswer: 'A. da'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa âm "r"?',
    speakText: 'Bé hãy tìm tiếng có chứa âm rờ?',
    options: ['A. da', 'B. ra', 'C. gia', 'D. va'],
    correctAnswer: 'B. ra'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "an"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần an?',
    options: ['A. bang', 'B. ban', 'C. bap', 'D. bat'],
    correctAnswer: 'B. ban'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ang"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ang?',
    options: ['A. gang', 'B. gan', 'C. gap', 'D. gat'],
    correctAnswer: 'A. gang'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "am"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần am?',
    options: ['A. tam', 'B. tan', 'C. tang', 'D. tat'],
    correctAnswer: 'A. tam'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ap"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ap?',
    options: ['A. sạp', 'B. sạt', 'C. sạm', 'D. sạn'],
    correctAnswer: 'A. sạp'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "on"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần on?',
    options: ['A. mọn', 'B. mọt', 'C. móm', 'D. mọc'],
    correctAnswer: 'A. mọn'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ot"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ot?',
    options: ['A. thon', 'B. thót', 'C. thoi', 'D. thong'],
    correctAnswer: 'B. thót'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "om"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần om?',
    options: ['A. chòm', 'B. chót', 'C. chọn', 'D. chọc'],
    correctAnswer: 'A. chòm'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "op"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần op?',
    options: ['A. họp', 'B. hòm', 'C. họt', 'D. họn'],
    correctAnswer: 'A. họp'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ăn"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ăn?',
    options: ['A. khăn', 'B. khang', 'C. kham', 'D. khan'],
    correctAnswer: 'A. khăn'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ăng"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ăng?',
    options: ['A. vằn', 'B. vằng', 'C. vâng', 'D. vân'],
    correctAnswer: 'B. vằng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ân"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ân?',
    options: ['A. dân', 'B. dăn', 'C. dâng', 'D. dang'],
    correctAnswer: 'A. dân'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "âng"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần âng?',
    options: ['A. vâng', 'B. vân', 'C. văn', 'D. vang'],
    correctAnswer: 'A. vâng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ay"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ay?',
    options: ['A. cây', 'B. cay', 'C. cai', 'D. cao'],
    correctAnswer: 'B. cay'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ây"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ây?',
    options: ['A. mây', 'B. may', 'C. mai', 'D. mao'],
    correctAnswer: 'A. mây'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "eo"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần eo?',
    options: ['A. keo', 'B. kẹo', 'C. kéo', 'D. A, B và C'],
    correctAnswer: 'D. A, B và C'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ao"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ao?',
    options: ['A. beo', 'B. bao', 'C. bèo', 'D. ban'],
    correctAnswer: 'B. bao'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "iu"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần iu?',
    options: ['A. dìu', 'B. diều', 'C. déo', 'D. dao'],
    correctAnswer: 'A. dìu'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "iêu"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần iêu?',
    options: ['A. diu', 'B. diều', 'C. déo', 'D. dao'],
    correctAnswer: 'B. diều'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ua"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ua?',
    options: ['A. dua', 'B. đùa', 'C. đua', 'D. A, B và C'],
    correctAnswer: 'D. A, B và C'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào có chứa vần "ưa"?',
    speakText: 'Bé hãy tìm tiếng có chứa vần ưa?',
    options: ['A. mưa', 'B. mía', 'C. mua', 'D. múa'],
    correctAnswer: 'A. mưa'
}
// === DẠNG 4: TRẮC NGHIỆM (LUẬT CHÍNH TẢ) - 100 câu ===
// (Nối tiếp vào sau Dạng 3)

// --- Nhóm 1: Quy tắc c / k (34 câu) ---
{
    type: 'multiple_choice',
    questionText: 'Âm "k" (ca) đi với các nguyên âm nào?',
    speakText: 'Âm ca đi với các nguyên âm nào?',
    options: ['A. i, e, ê', 'B. a, o, u', 'C. ơ, ư, y', 'D. o, ô, ơ'],
    correctAnswer: 'A. i, e, ê'
},
{
    type: 'multiple_choice',
    questionText: 'Âm "c" (cờ) đi với các nguyên âm nào?',
    speakText: 'Âm cờ đi với các nguyên âm nào?',
    options: ['A. i, e, ê', 'B. a, o, ô, ơ, u, ư', 'C. Chỉ a, o, ô', 'D. Chỉ i, e'],
    correctAnswer: 'B. a, o, ô, ơ, u, ư'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...im", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...im, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...e", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...e, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ê", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ê, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...a", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...a, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...o", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...o, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ô", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ô, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ơ", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ơ, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...u", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...u, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ư", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ư, ta dùng âm cờ hay ca?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Kì', 'B. Cì'],
    correctAnswer: 'A. Kì'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Cụ', 'B. Kụ'],
    correctAnswer: 'A. Cụ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Ce', 'B. Ke'],
    correctAnswer: 'B. Ke'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Ca', 'B. Ka'],
    correctAnswer: 'A. Ca'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Cê', 'B. Kê'],
    correctAnswer: 'B. Kê'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Co', 'B. Ko'],
    correctAnswer: 'A. Co'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Ca', 'B. Cò', 'C. Ki', 'D. Cư'],
    correctAnswer: 'C. Ki'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Kì', 'B. Kẽ', 'C. Cú', 'D. Ka'],
    correctAnswer: 'D. Ka'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Cê', 'B. Kê', 'C. Ca', 'D. Cò'],
    correctAnswer: 'A. Cê'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Kén', 'B. Kẹo', 'C. Cơm', 'D. Cê'],
    correctAnswer: 'D. Cê'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Kim" dùng âm gì?',
    speakText: 'Tiếng Kim dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Cua" dùng âm gì?',
    speakText: 'Tiếng Cua dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Kẻ" dùng âm gì?',
    speakText: 'Tiếng Kẻ dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Cáo" dùng âm gì?',
    speakText: 'Tiếng Cáo dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Cừu" dùng âm gì?',
    speakText: 'Tiếng Cừu dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Kệ" dùng âm gì?',
    speakText: 'Tiếng Kệ dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Cổ" dùng âm gì?',
    speakText: 'Tiếng Cổ dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Cờ" dùng âm gì?',
    speakText: 'Tiếng Cờ dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Kính" dùng âm gì?',
    speakText: 'Tiếng Kính dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Cá" dùng âm gì?',
    speakText: 'Tiếng Cá dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Kéo" dùng âm gì?',
    speakText: 'Tiếng Kéo dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Cốc" dùng âm gì?',
    speakText: 'Tiếng Cốc dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'A. c'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Kiến" dùng âm gì?',
    speakText: 'Tiếng Kiến dùng âm gì?',
    options: ['A. c', 'B. k'],
    correctAnswer: 'B. k'
},

// --- Nhóm 2: Quy tắc g / gh (33 câu) ---
{
    type: 'multiple_choice',
    questionText: 'Âm "gh" (gờ ghép) đi với các nguyên âm nào?',
    speakText: 'Âm gờ ghép đi với các nguyên âm nào?',
    options: ['A. i, e, ê', 'B. a, o, u', 'C. ơ, ư, y', 'D. o, ô, ơ'],
    correctAnswer: 'A. i, e, ê'
},
{
    type: 'multiple_choice',
    questionText: 'Âm "g" (gờ đơn) đi với các nguyên âm nào?',
    speakText: 'Âm gờ đơn đi với các nguyên âm nào?',
    options: ['A. i, e, ê', 'B. a, o, ô, ơ, u, ư', 'C. Chỉ a, o, ô', 'D. Chỉ i, e'],
    correctAnswer: 'B. a, o, ô, ơ, u, ư'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...i", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...i, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'B. gh'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...e", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...e, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'B. gh'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ê", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ê, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'B. gh'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...a", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...a, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...o", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...o, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ô", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ô, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ơ", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ơ, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...u", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...u, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ư", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ư, ta dùng âm gờ hay gờ ghép?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Gì', 'B. Ghì'],
    correctAnswer: 'B. Ghì'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Gỗ', 'B. Ghỗ'],
    correctAnswer: 'A. Gỗ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Ge', 'B. Ghe'],
    correctAnswer: 'B. Ghe'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Ga', 'B. Gha'],
    correctAnswer: 'A. Ga'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Gê', 'B. Ghê'],
    correctAnswer: 'B. Ghê'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Gò', 'B. Ghò'],
    correctAnswer: 'A. Gò'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Ga', 'B. Gò', 'C. Ghi', 'D. Gù'],
    correctAnswer: 'C. Ghi'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Ghì', 'B. Ghế', 'C. Gỗ', 'D. Gha'],
    correctAnswer: 'D. Gha'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Gê', 'B. Ghê', 'C. Ga', 'D. Gò'],
    correctAnswer: 'A. Gê'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ghẹ" dùng âm gì?',
    speakText: 'Tiếng Ghẹ dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'B. gh'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Gà" dùng âm gì?',
    speakText: 'Tiếng Gà dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ghi" dùng âm gì?',
    speakText: 'Tiếng Ghi dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'B. gh'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Gù" dùng âm gì?',
    speakText: 'Tiếng Gù dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Gió" (trong "gió") dùng âm gì?',
    speakText: 'Tiếng Gió dùng âm gì?',
    options: ['A. g', 'B. gi'],
    correctAnswer: 'B. gi'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ghế" dùng âm gì?',
    speakText: 'Tiếng Ghế dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'B. gh'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Gạo" dùng âm gì?',
    speakText: 'Tiếng Gạo dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Gói" dùng âm gì?',
    speakText: 'Tiếng Gói dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ghi" (trong "ghi nhớ") dùng âm gì?',
    speakText: 'Tiếng Ghi trong ghi nhớ dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'B. gh'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Gù" (trong "lưng gù") dùng âm gì?',
    speakText: 'Tiếng Gù trong lưng gù dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Gân" dùng âm gì?',
    speakText: 'Tiếng Gân dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ghét" dùng âm gì?',
    speakText: 'Tiếng Ghét dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'B. gh'
},
{
    type:Example: "Âm 'ng' (ngờ đơn) đi với các nguyên âm nào?",
    questionText: 'Tiếng "Góp" dùng âm gì?',
    speakText: 'Tiếng Góp dùng âm gì?',
    options: ['A. g', 'B. gh'],
    correctAnswer: 'A. g'
},

// --- Nhóm 3: Quy tắc ng / ngh (33 câu) ---
{
    type: 'multiple_choice',
    questionText: 'Âm "ngh" (ngờ ghép) đi với các nguyên âm nào?',
    speakText: 'Âm ngờ ghép đi với các nguyên âm nào?',
    options: ['A. i, e, ê', 'B. a, o, u', 'C. ơ, ư, y', 'D. o, ô, ơ'],
    correctAnswer: 'A. i, e, ê'
},
{
    type: 'multiple_choice',
    questionText: 'Âm "ng" (ngờ đơn) đi với các nguyên âm nào?',
    speakText: 'Âm ngờ đơn đi với các nguyên âm nào?',
    options: ['A. i, e, ê', 'B. a, o, ô, ơ, u, ư', 'C. Chỉ a, o, ô', 'D. Chỉ i, e'],
    correctAnswer: 'B. a, o, ô, ơ, u, ư'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...i", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...i, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'B. ngh'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...e", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...e, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'B. ngh'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ê", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ê, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'B. ngh'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...a", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...a, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...o", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...o, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ô", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ô, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ơ", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ơ, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...u", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...u, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Để điền vào tiếng "...ư", ta dùng âm nào?',
    speakText: 'Để điền vào tiếng ...ư, ta dùng âm ngờ hay ngờ ghép?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Ngĩ', 'B. Nghĩ'],
    correctAnswer: 'B. Nghĩ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Ngủ', 'B. Nghủ'],
    correctAnswer: 'A. Ngủ'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Nge', 'B. Nghe'],
    correctAnswer: 'B. Nghe'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Nga', 'B. Ngha'],
    correctAnswer: 'A. Nga'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Ngê', 'B. Nghê'],
    correctAnswer: 'B. Nghê'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết ĐÚNG chính tả?',
    speakText: 'Tiếng nào viết đúng chính tả?',
    options: ['A. Ngò', 'B. Nghò'],
    correctAnswer: 'A. Ngò'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Nga', 'B. Ngò', 'C. Nghi', 'D. Ngù'],
    correctAnswer: 'C. Nghi'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Nghì', 'B. Nghé', 'C. Ngỗ', 'D. Ngha'],
    correctAnswer: 'D. Ngha'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng nào viết SAI chính tả?',
    speakText: 'Tiếng nào viết sai chính tả?',
    options: ['A. Ngê', 'B. Nghê', 'C. Nga', 'D. Ngò'],
    correctAnswer: 'A. Ngê'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Nghệ" dùng âm gì?',
    speakText: 'Tiếng Nghệ dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'B. ngh'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ngà" (voi) dùng âm gì?',
    speakText: 'Tiếng Ngà voi dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Nghi" (nghi ngờ) dùng âm gì?',
    speakText: 'Tiếng Nghi trong nghi ngờ dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'B. ngh'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ngư" (ngư dân) dùng âm gì?',
    speakText: 'Tiếng Ngư trong ngư dân dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Nghé" (con nghé) dùng âm gì?',
    speakText: 'Tiếng Nghé trong con nghé dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'B. ngh'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ngô" (bắp ngô) dùng âm gì?',
    speakText: 'Tiếng Ngô trong bắp ngô dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ngõ" (ngõ hẻm) dùng âm gì?',
    speakText: 'Tiếng Ngõ trong ngõ hẻm dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Nghỉ" (nghỉ hè) dùng âm gì?',
    speakText: 'Tiếng Nghỉ trong nghỉ hè dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'B. ngh'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ngã" (bị ngã) dùng âm gì?',
    speakText: 'Tiếng Ngã trong bị ngã dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ngơ" (ngơ ngác) dùng âm gì?',
    speakText: 'Tiếng Ngơ trong ngơ ngác dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Ngu" (ngu ngốc) dùng âm gì?',
    speakText: 'Tiếng Ngu trong ngu ngốc dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'A. ng'
},
{
    type: 'multiple_choice',
    questionText: 'Tiếng "Nghề" (nghề nghiệp) dùng âm gì?',
    speakText: 'Tiếng Nghề trong nghề nghiệp dùng âm gì?',
    options: ['A. ng', 'B. ngh'],
    correctAnswer: 'B. ngh'
}
// === DẠNG 5: SẮP XẾP TỪ (SCRAMBLE) - 100 câu ===
// (Nối tiếp vào sau Dạng 4)

// --- Nhóm 1: Câu 2 tiếng ---
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['cờ', 'Cá'],
    correctAnswer: ['Cá', 'cờ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['gỗ', 'Ghế'],
    correctAnswer: ['Ghế', 'gỗ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['bà', 'Giỗ'],
    correctAnswer: ['Giỗ', 'bà']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['bộ', 'Đi'],
    correctAnswer: ['Đi', 'bộ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['đò', 'Đi'],
    correctAnswer: ['Đi', 'đò']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['hè', 'Nghỉ'],
    correctAnswer: ['Nghỉ', 'hè']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['phở', 'Ăn'],
    correctAnswer: ['Ăn', 'phở']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['nhỏ', 'Chó'],
    correctAnswer: ['Chó', 'nhỏ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['tre', 'Bụi'],
    correctAnswer: ['Bụi', 'tre']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['na', 'Quả'],
    correctAnswer: ['Quả', 'na']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['nho', 'Quả'],
    correctAnswer: ['Quả', 'nho']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['can', 'Lan'],
    correctAnswer: ['Lan', 'can']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['vang', 'Ca'],
    correctAnswer: ['Ca', 'vang']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['bốt', 'Rô'],
    correctAnswer: ['Rô', 'bốt']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['vẹt', 'Con'],
    correctAnswer: ['Con', 'vẹt']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['cò', 'Đàn'],
    correctAnswer: ['Đàn', 'cò']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['thơm', 'Cơm'],
    correctAnswer: ['Cơm', 'thơm']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['bần', 'Xà'],
    correctAnswer: ['Xà', 'bần']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['tổ', 'Họp'],
    correctAnswer: ['Họp', 'tổ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['trúc', 'Tre'],
    correctAnswer: ['Tre', 'trúc']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['cầu', 'Qua'],
    correctAnswer: ['Qua', 'cầu']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['cao', 'Nêu'],
    correctAnswer: ['Nêu', 'cao']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['đá', 'Cua'],
    correctAnswer: ['Cua', 'đá']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: 'rùa', 'Con'],
    correctAnswer: ['Con', 'rùa']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['trâu', 'Bầy'],
    correctAnswer: ['Bầy', 'trâu']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['buồm', 'Thuyền'],
    correctAnswer: ['Thuyền', 'buồm']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['mà', 'Mượt'],
    correctAnswer: ['Mượt', 'mà']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['ve', 'Kêu'],
    correctAnswer: ['Ve', 'kêu']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['đỏ', 'Cờ'],
    correctAnswer: ['Cờ', 'đỏ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
    scrambledWords: ['bô', 'Bi'],
    correctAnswer: ['Bi', 'bô']
},

// --- Nhóm 2: Câu 3 tiếng ---
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bé', 'bế', 'Bà'],
    correctAnswer: ['Bà', 'bế', 'bé']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['có', 'Bò', 'cỏ'],
    correctAnswer: ['Bò', 'có', 'cỏ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['cá', 'có', 'Bé', 'cờ'],
    correctAnswer: ['Bé', 'có', 'cá', 'cờ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['đi', 'đò', 'Dì'],
    correctAnswer: ['Dì', 'đi', 'đò']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['vẽ', 'Bé', 'cờ', 'đỏ'],
    correctAnswer: ['Bé', 'vẽ', 'cờ', 'đỏ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['ve', 'kêu', 'Ve', 've'],
    correctAnswer: ['Ve', 'kêu', 've', 've']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['Bé', 'gỗ', 'có', 'ghế'],
    correctAnswer: ['Bé', 'có', 'ghế', 'gỗ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['giỗ', 'Nhà', 'có'],
    correctAnswer: ['Nhà', 'có', 'giỗ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bi', 'Bé', 'bô'],
    correctAnswer: ['Bé', 'bi', 'bô']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['Bà', 'bé', 'giò', 'cho'],
    correctAnswer: ['Bà', 'cho', 'bé', 'giò']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['ô', 'Bố', 'tô', 'có'],
    correctAnswer: ['Bố', 'có', 'ô', 'tô']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['non', 'mạ', 'Lá'],
    correctAnswer: ['Lá', 'mạ', 'non']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['lọ', 'mơ', 'có', 'Mẹ'],
    correctAnswer: ['Mẹ', 'có', 'lọ', 'mơ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['na', 'Bà', 'bé', 'cho'],
    correctAnswer: ['Bà', 'cho', 'bé', 'na']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bộ', 'đi', 'Bố'],
    correctAnswer: ['Bố', 'đi', 'bộ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['tô', 'tập', 'Bé'],
    correctAnswer: ['Bé', 'tập', 'tô']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['chợ', 'Mẹ', 'đi', 'Bờ'],
    correctAnswer: ['Mẹ', 'đi', 'chợ', 'Bờ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['đi', 'chợ', 'Mẹ'],
    correctAnswer: ['Mẹ', 'đi', 'chợ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['nghỉ', 'hè', 'Bé'],
    correctAnswer: ['Bé', 'nghỉ', 'hè']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['ăn', 'phở', 'Bố'],
    correctAnswer: ['Bố', 'ăn', 'phở']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['chó', 'nhỏ', 'Chú'],
    correctAnswer: ['Chú', 'chó', 'nhỏ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bà', 'Nhà', 'tre', 'có'],
    correctAnswer: ['Nhà', 'bà', 'có', 'tre']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['gì', 'thế?', 'nghĩ', 'Bé'],
    correctAnswer: ['Bé', 'nghĩ', 'gì', 'thế?']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['tha', 'cỏ', 'bó', 'Thỏ'],
    correctAnswer: ['Thỏ', 'tha', 'bó', 'cỏ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['nhà', 'mát', 'Cả', 'đi', 'nghỉ'],
    correctAnswer: ['Cả', 'nhà', 'đi', 'nghỉ', 'mát']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['sàn', 'Nhà', 'can', 'có', 'lan'],
    correctAnswer: ['Nhà', 'sàn', 'có', 'lan', 'can']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['Mẹ', 'làn', 'mua', 'quai', 'có'],
    correctAnswer: ['Mẹ', 'mua', 'làn', 'có', 'quai']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['vang', 'hát', 'ca', 'Bé'],
    correctAnswer: ['Bé', 'hát', 'ca', 'vang']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['làm', 'nhà', 'Rô', 'bốt', 'Cả'],
    correctAnswer: ['Cả', 'nhà', 'làm', 'Rô', 'bốt']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['vẹt', 'Con', 'nhọn', 'mỏ', 'có'],
    correctAnswer: ['Con', 'vẹt', 'có', 'mỏ', 'nhọn']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['lượn', 'bay', 'cò', 'Đàn'],
    correctAnswer: ['Đàn', 'cò', 'bay', 'lượn']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['mạ', 'thơm', 'Cơm'],
    correctAnswer: ['Cơm', 'mạ', 'thơm']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['đi', 'chẹp', 'Bé', 'chọp'],
    correctAnswer: ['Bé', 'đi', 'chọp', 'chẹp']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bé', 'Nhà', 'bần', 'có', 'xà'],
    correctAnswer: ['Nhà', 'bé', 'có', 'xà', 'bần']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['họp', 'bé', 'tổ', 'Lớp'],
    correctAnswer: ['Lớp', 'bé', 'họp', 'tổ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['cầu', 'đi', 'Bé', 'qua'],
    correctAnswer: ['Bé', 'đi', 'qua', 'cầu']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['cao', 'nêu', 'Cây'],
    correctAnswer: ['Cây', 'nêu', 'cao']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['đá', 'cua', 'Con'],
    correctAnswer: ['Con', 'cua', 'đá']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['chậm', 'Con', 'rùa', 'bò'],
    correctAnswer: ['Con', 'rùa', 'bò', 'chậm']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['trâu', 'cỏ', 'gặm', 'Bầy'],
    correctAnswer: ['Bầy', 'trâu', 'gặm', 'cỏ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['lòa', 'sáng', 'chớp', 'Tia'],
    correctAnswer: ['Tia', 'chớp', 'sáng', 'lòa']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['xa', 'đi', 'Thuyền', 'buồm'],
    correctAnswer: ['Thuyền', 'buồm', 'đi', 'xa']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['chợ', 'có', 'lạc', 'đỗ,', 'có', 'Chợ'],
    correctAnswer: ['Chợ', 'có', 'đỗ,', 'có', 'lạc']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['ở', 'bé', 'Nhà', 'phố'],
    correctAnswer: ['Nhà', 'bé', 'ở', 'phố']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['na,', 'Quả', 'nho', 'quả'],
    correctAnswer: ['Quả', 'na,', 'quả', 'nho']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['mua', 'Mẹ', 'mía', 'dưa,', 'mua'],
    correctAnswer: ['Mẹ', 'mua', 'dưa,', 'mua', 'mía']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['em', 'mượt', 'Lúa', 'mà', 'quê'],
    correctAnswer: ['Lúa', 'quê', 'em', 'mượt', 'mà']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bé', 'Bố', 'cho', 'vở'],
    correctAnswer: ['Bố', 'cho', 'bé', 'vở']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['có', 'cá', 'Hồ'],
    correctAnswer: ['Hồ', 'có', 'cá']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['gà', 'có', 'Bà', 'ri'],
    correctAnswer: ['Bà', 'có', 'gà', 'ri']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['có', 'Bé', 'mũ', 'da'],
    correctAnswer: ['Bé', 'có', 'mũ', 'da']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['thư', 'Gà', 'gửi', 'mẹ'],
    correctAnswer: ['Gà', 'gửi', 'thư', 'mẹ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['số', 'Chó', 'giữ', 'nhà'],
    correctAnswer: ['Chó', 'giữ', 'nhà', 'số']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['nhỏ', 'Cá', 'mè', 'như', 'lá'],
    correctAnswer: ['Cá', 'mè', 'nhỏ', 'như', 'lá']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['sẻ', 'có', 'tổ', 'Chim'],
    correctAnswer: ['Chim', 'sẻ', 'có', 'tổ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['mẹ', 'Bé', 'lá', 'cho'],
    correctAnswer: ['Bé', 'cho', 'mẹ', 'lá']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['na', 'Mẹ', 'mua', 'khế', 'và'],
    correctAnswer: ['Mẹ', 'mua', 'na', 'và', 'khế']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bi', 've', 've', 'Hè'],
    correctAnswer: ['Hè', 've', 'bi', 've']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['chó', 'Bé', 'xù', 'có'],
    correctAnswer: ['Bé', 'có', 'chó', 'xù']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['thủ', 'về', 'dù', 'Cụ'],
    correctAnswer: ['Cụ', 'về', 'thủ', 'dù']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['chữ', 'Bé', 'tô'],
    correctAnswer: ['Bé', 'tô', 'chữ']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['mía', 'Bà', 'có'],
    correctAnswer: ['Bà', 'có', 'mía']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['sữa', 'Bé', 'ca'],
    correctAnswer: ['Ca', 'sữa', 'của', 'bé']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['chia', 'Dì', 'quà'],
    correctAnswer: ['Dì', 'chia', 'quà']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['trưa', 'Ngủ'],
    correctAnswer: ['Ngủ', 'trưa']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['múa', 'Bé', 'ca', 'và'],
    correctAnswer: ['Bé', 'múa', 'và', 'ca']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['vua', 'Nhà'],
    correctAnswer: ['Nhà', 'vua']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['giấy', 'Tờ'],
    correctAnswer: ['Tờ', 'giấy']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bay', 'Mây'],
    correctAnswer: ['Mây', 'bay']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['Cây', 'cau'],
    correctAnswer: ['Cây', 'cau']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bơi', 'Sếu'],
    correctAnswer: ['Sếu', 'bơi']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['áo', 'Cái'],
    correctAnswer: ['Cái', 'áo']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['sao', 'Ngôi'],
    correctAnswer: ['Ngôi', 'sao']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['thổi', 'Gió'],
    correctAnswer: ['Gió', 'thổi']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['cười', 'Bé'],
    correctAnswer: ['Bé', 'cười']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['hoa', 'Tưới'],
    correctAnswer: ['Tưới', 'hoa']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['lưới', 'Cái'],
    correctAnswer: ['Cái', 'lưới']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['vườn', 'Ra'],
    correctAnswer: ['Ra', 'vườn']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['ươm', 'Vườn'],
    correctAnswer: ['Vườn', 'ươm']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['bướm', 'Con'],
    correctAnswer: ['Con', 'bướm']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['chuột', 'Con'],
    correctAnswer: ['Con', 'chuột']
},
{
    type: 'scramble',
    questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
    speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
    scrambledWords: ['đậu', 'Bé', 'hái'],
    correctAnswer: ['Bé', 'hái', 'đậu']
}
    // Nơi chúng ta sẽ thêm 490 câu hỏi còn lại...

];

