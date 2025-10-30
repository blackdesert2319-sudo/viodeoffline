// Đây là tệp 'questions.js'
// Tệp này CHỈ chứa thư viện câu hỏi

const questions = [
    // === DẠNG 1: TRẮC NGHIỆM (ĐẾM) - 2 câu ===
    // Đây là tệp 'questions.js'
// NỘI DUNG MỚI (100 câu Dạng 1)

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
    
    // Nơi chúng ta sẽ thêm 490 câu hỏi còn lại...

];
