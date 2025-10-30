// Đây là tệp 'questions.js'
// Tệp này CHỈ chứa thư viện câu hỏi

const questions = [
    // === DẠNG 1: TRẮC NGHIỆM (ĐẾM) - 2 câu ===
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "b" trong câu: Ba bế bé.',
        speakText: 'Có bao nhiêu âm bờ trong câu: Ba bế bé.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3'
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "a" trong câu: Nhà bà có lá.',
        speakText: 'Có bao nhiêu vần a trong câu: Nhà bà có lá.',
        options: ['A. 3', 'B. 4', 'C. 2', 'D. 1'],
        correctAnswer: 'A. 3'
    },
    
    // === DẠNG 2: BẤM TÌM (GẠCH CHÂN) - 2 câu ===
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "gh" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm gờ ghép trong câu sau:',
        sentence: 'Bé có ghế gỗ.',
        correctAnswers: ['gh'] 
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "k" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm ca trong câu sau:',
        sentence: 'Kì đà bò ở kẽ đá.',
        correctAnswers: ['k'] 
    },
    
    // === DẠNG 3: TRẮC NGHIỆM (ĐIỀN TỪ & NHẬN DIỆN) - 2 câu ===
    {
        type: 'multiple_choice', // 3A (Điền từ)
        questionText: 'Chọn âm đúng để điền vào chỗ trống: ...ú mèo.',
        speakText: 'Bé hãy chọn âm chờ hay âm trờ để điền vào chỗ trống: ...ú mèo.', 
        options: ['A. ch', 'B. tr'],
        correctAnswer: 'A. ch' // Đã sửa lỗi
    },
    {
        type: 'multiple_choice', // 3B (Nhận diện)
        questionText: 'Tiếng nào có chứa âm "d" trong các tiếng sau?',
        speakText: 'Bé hãy tìm tiếng có chứa âm dờ trong các tiếng sau:', 
        options: ['A. lá', 'B. gió', 'C. dút', 'D. nước'],
        correctAnswer: 'C. dút'
    },
    
    // === DẠNG 4: TRẮC NGHIỆM (LUẬT CHÍNH TẢ) - 2 câu ===
    {
        type: 'multiple_choice',
        questionText: 'Âm "k" (ca) đi với các nguyên âm nào?',
        speakText: 'Âm ca đi với các nguyên âm nào?', 
        options: ['A. a, o, u', 'B. i, e, ê', 'C. ơ, ư, y', 'D. o, ô, ơ'],
        correctAnswer: 'B. i, e, ê'
    },
    {
        type: 'multiple_choice',
        questionText: 'Âm "gh" (gờ ghép) đi với các nguyên âm nào?',
        speakText: 'Âm gờ ghép đi với các nguyên âm nào?', 
        options: ['A. a, o, u', 'B. o, ô, ơ', 'C. i, e, ê', 'D. u, ư, y'],
        correctAnswer: 'C. i, e, ê'
    },
    
    // === DẠNG 5: SẮP XẾP TỪ (SCRAMBLE) - 2 câu ===
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
    }
    
    // Nơi chúng ta sẽ thêm 490 câu hỏi còn lại...
];