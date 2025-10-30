// Tệp questions.js (ĐÃ SỬA LỖI ĐẾM NGUYÊN ÂM CHÍNH XÁC - 150 câu)

const questions = [
    
    // === DẠNG 1: TRẮC NGHIỆM (ĐẾM) - 30 câu (Bài 1-36) ===
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "b" trong câu: Bà bế bé.',
        speakText: 'Có bao nhiêu chữ bờ trong câu: Bà bế bé.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3', lesson: 2
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "a" (a) trong câu: Bà bế bé.',
        speakText: 'Có bao nhiêu chữ a trong câu: Bà bế bé.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1', lesson: 2
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ê" (ê) trong câu: Bà bế bé.',
        speakText: 'Có bao nhiêu chữ ê trong câu: Bà bế bé.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 5
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "e" (e) trong câu: Bà bế bé.',
        speakText: 'Có bao nhiêu chữ e trong câu: Bà bế bé.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 5
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "c" trong câu: Cá cờ có cờ.',
        speakText: 'Có bao nhiêu chữ cờ trong câu: Cá cờ có cờ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 3
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "o" (o) trong câu: Bò có cỏ.',
        speakText: 'Có bao nhiêu chữ o trong câu: Bò có cỏ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1', lesson: 6
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "v" trong câu: Ve kêu ve ve.',
        speakText: 'Có bao nhiêu chữ vờ trong câu: Ve kêu ve ve.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 27
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ê" (ê) trong câu: Ve kêu ve ve.',
        speakText: 'Có bao nhiêu chữ ê trong câu: Ve kêu ve ve.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 27
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "đ" trong câu: Dì đi đò.',
        speakText: 'Có bao nhiêu chữ đờ trong câu: Dì đi đò.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2', lesson: 8
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ô" (ô) trong câu: Bé có ghế gỗ.',
        speakText: 'Có bao nhiêu chữ ô trong câu: Bé có ghế gỗ.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 7
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "i" (i) trong câu: Gà gô có giò.',
        speakText: 'Có bao nhiêu chữ i trong câu: Gà gô có giò.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'A. 0', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ơ" (ơ) trong câu: Gà gô có giò.',
        speakText: 'Có bao nhiêu chữ ơ trong câu: Gà gô có giò.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'A. 0', lesson: 9
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "h" trong câu: Hồ có hoa.',
        speakText: 'Có bao nhiêu chữ hờ trong câu: Hồ có hoa.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 12
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "i" (i) trong câu: Dì đi chợ.',
        speakText: 'Có bao nhiêu chữ i trong câu: Dì đi chợ.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "k" trong câu: Kì đà bò ở kẽ đá.',
        speakText: 'Có bao nhiêu chữ ca trong câu: Kì đà bò ở kẽ đá.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "l" trong câu: Lá lụa lá tre.',
        speakText: 'Có bao nhiêu chữ lờ trong câu: Lá lụa lá tre.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 12
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "m" trong câu: Mẹ mua mía.',
        speakText: 'Có bao nhiêu chữ mờ trong câu: Mẹ mua mía.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "n" trong câu: Na non na già.',
        speakText: 'Có bao nhiêu chữ nờ trong câu: Na non na già.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "r" trong câu: Rìu gỗ rỉ.',
        speakText: 'Có bao nhiêu chữ rờ trong câu: Rìu gỗ rỉ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "s" trong câu: Sẻ sà sà.',
        speakText: 'Có bao nhiêu chữ sờ trong câu: Sẻ sà sà.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ă" (ă) trong câu: Lan can nhà bà.',
        speakText: 'Có bao nhiêu chữ á trong câu: Lan can nhà bà.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'A. 0', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "e" (e) trong câu: Cây tre đen.',
        speakText: 'Có bao nhiêu chữ e trong câu: Cây tre đen.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "i" (i) trong câu: Con chim xinh.',
        speakText: 'Có bao nhiêu chữ i trong câu: Con chim xinh.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "u" (u) trong câu: Con chuột run.',
        speakText: 'Có bao nhiêu chữ u trong câu: Con chuột run.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "a" (a) trong câu: Cam thơm cam nhà.',
        speakText: 'Có bao nhiêu chữ a trong câu: Cam thơm cam nhà.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 34
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "o" (o) trong câu: Hòm gỗ hòm sắt.',
        speakText: 'Có bao nhiêu chữ o trong câu: Hòm gỗ hòm sắt.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ô" (ô) trong câu: Đồ xốp mềm.',
        speakText: 'Có bao nhiêu chữ ô trong câu: Đồ xốp mềm.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ơ" (ơ) trong câu: Cơm thơm cơm dẻo.',
        speakText: 'Có bao nhiêu chữ ơ trong câu: Cơm thơm cơm dẻo.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ng" trong câu: Ngà voi nhà ngói.',
        speakText: 'Có bao nhiêu chữ ngờ trong câu: Ngà voi nhà ngói.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ngh" trong câu: Nghĩ ngợi nghỉ ngơi.',
        speakText: 'Có bao nhiêu chữ ngờ ghép trong câu: Nghĩ ngợi nghỉ ngơi.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 19
    },
    
    // === DẠNG 2: BẤM TÌM (GẠCH CHÂN) - 30 câu (Bài 1-36) ===
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
        sentence: 'Ba bế bé.',
        correctAnswers: ['b', 'B'], lesson: 2
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "c" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm cờ trong câu sau:',
        sentence: 'Bò có cỏ.',
        correctAnswers: ['c'], lesson: 3
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "đ" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm đờ trong câu sau:',
        sentence: 'Dì đi đò.',
        correctAnswers: ['đ'], lesson: 8
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "v" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm vờ trong câu sau:',
        sentence: 'Ve kêu ve ve.',
        correctAnswers: ['V', 'v'], lesson: 27
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "g" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm gờ trong câu sau:',
        sentence: 'Gà gô có giò.',
        correctAnswers: ['G', 'g'], lesson: 17
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "h" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm hờ trong câu sau:',
        sentence: 'Hồ có hoa.',
        correctAnswers: ['H', 'h'], lesson: 12
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "k" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm ca trong câu sau:',
        sentence: 'Kì đà bò ở kẽ đá.',
        correctAnswers: ['K', 'k'], lesson: 11
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "l" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm lờ trong câu sau:',
        sentence: 'Lá lụa lá tre.',
        correctAnswers: ['L', 'l'], lesson: 12
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "m" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm mờ trong câu sau:',
        sentence: 'Mẹ mua mía.',
        correctAnswers: ['M', 'm'], lesson: 14
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "n" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm nờ trong câu sau:',
        sentence: 'Na non na già.',
        correctAnswers: ['N', 'n'], lesson: 14
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "r" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm rờ trong câu sau:',
        sentence: 'Rìu gỗ rỉ.',
        correctAnswers: ['R', 'r'], lesson: 21
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "s" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm sờ trong câu sau:',
        sentence: 'Sẻ sà sà.',
        correctAnswers: ['S', 's'], lesson: 21
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "ch" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm chờ trong câu sau:',
        sentence: 'Chú chó con.',
        correctAnswers: ['Ch', 'ch'], lesson: 14
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "kh" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm khờ trong câu sau:',
        sentence: 'Khế mua khế nhà.',
        correctAnswers: ['Kh', 'kh'], lesson: 14
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "ph" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm phờ trong câu sau:',
        sentence: 'Phở ngon phở bò.',
        correctAnswers: ['Ph', 'ph'], lesson: 26
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "th" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm thờ trong câu sau:',
        sentence: 'Thỏ tha bó cỏ.',
        correctAnswers: ['Th', 'th'], lesson: 23
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "lan" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần lan trong câu sau:',
        sentence: 'Lan can nhà bà.',
        correctAnswers: ['Lan', 'lan'], lesson: 31
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "in" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần in trong câu sau:',
        sentence: 'Con chim xinh.',
        correctAnswers: ['in', 'inh'], lesson: 33
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "un" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần un trong câu sau:',
        sentence: 'Con chuột run.',
        correctAnswers: ['un'], lesson: 33
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "am" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần am trong câu sau:',
        sentence: 'Cam thơm cam nhà.',
        correctAnswers: ['am', 'om'], lesson: 34
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "om" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần om trong câu sau:',
        sentence: 'Hòm gỗ hòm sắt.',
        correctAnswers: ['om'], lesson: 36
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "ôm" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần ôm trong câu sau:',
        sentence: 'Đồ xốp mềm.',
        correctAnswers: ['ôp'], lesson: 36
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "ơm" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần ơm trong câu sau:',
        sentence: 'Cơm thơm cơm dẻo.',
        correctAnswers: ['ơm'], lesson: 36
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "ng" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm ngờ trong câu sau:',
        sentence: 'Ngà voi nhà ngói.',
        correctAnswers: ['Ng', 'ng'], lesson: 19
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "ngh" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm ngờ ghép trong câu sau:',
        sentence: 'Nghĩ ngợi nghỉ ngơi.',
        correctAnswers: ['Ngh', 'ngh'], lesson: 19
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "gi" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm gi trong câu sau:',
        sentence: 'Giờ mờ giá rẻ.',
        correctAnswers: ['Gi', 'gi'], lesson: 17
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "u" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các chữ u trong câu sau:',
        sentence: 'Mũ vải, túi lụa.',
        correctAnswers: ['u'], lesson: 13
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "ô" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các chữ ô trong câu sau:',
        sentence: 'Hồ bơi có cá rô.',
        correctAnswers: ['ô'], lesson: 7
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "e" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các chữ e trong câu sau:',
        sentence: 'Lá tre xanh mướt.',
        correctAnswers: ['e'], lesson: 5
    },
    
    // === DẠNG 3: CHÍNH TẢ (LỰA CHỌN TỪ ĐÚNG) - 30 câu (Bài 1-36) ===
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng để điền vào chỗ trống: Ba ... bé.',
        speakText: 'Chọn từ đúng để điền vào chỗ trống: Ba bế bé.',
        options: ['A. bố', 'B. bế', 'C. bơ'],
        correctAnswer: 'B. bế', lesson: 5
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng để điền vào chỗ trống: Chú ... có giò.',
        speakText: 'Chọn từ đúng để điền vào chỗ trống: Chú chó có giò.',
        options: ['A. giò', 'B. cho', 'C. chó'],
        correctAnswer: 'C. chó', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng để điền vào chỗ trống: ... đi đò.',
        speakText: 'Chọn từ đúng để điền vào chỗ trống: Dì đi đò.',
        options: ['A. Dì', 'B. Rì', 'C. Gì'],
        correctAnswer: 'A. Dì', lesson: 8
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng để điền vào chỗ trống: ... gỗ rỉ.',
        speakText: 'Chọn từ đúng để điền vào chỗ trống: Rìu gỗ rỉ.',
        options: ['A. Gìu', 'B. Dìu', 'C. Rìu'],
        correctAnswer: 'C. Rìu', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng để điền vào chỗ trống: Bốn ... là bốn.',
        speakText: 'Chọn từ đúng để điền vào chỗ trống: Bốn trừ bốn là bốn.',
        options: ['A. từ', 'B. trừ', 'C. tư'],
        correctAnswer: 'B. trừ', lesson: 24
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng để điền vào chỗ trống: Con ... bò.',
        speakText: 'Chọn từ đúng để điền vào chỗ trống: Con rùa bò.',
        options: ['A. zùa', 'B. rùa', 'C. dua'],
        correctAnswer: 'B. rùa', lesson: 25
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng để điền vào chỗ trống: ... chó nhỏ.',
        speakText: 'Chọn từ đúng để điền vào chỗ trống: Chú chó nhỏ.',
        options: ['A. Chó', 'B. Chú', 'C. Ru'],
        correctAnswer: 'B. Chú', lesson: 25
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đầu đúng: Con ...áo.',
        speakText: 'Chọn âm đầu đúng: Con sáo.',
        options: ['A. x', 'B. s', 'C. r'],
        correctAnswer: 'B. s', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đầu đúng: ...à voi.',
        speakText: 'Chọn âm đầu đúng: Ngà voi.',
        options: ['A. g', 'B. ng', 'C. ngh'],
        correctAnswer: 'B. ng', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đầu đúng: ...ế gỗ.',
        speakText: 'Chọn âm đầu đúng: Ghế gỗ.',
        options: ['A. g', 'B. gh', 'C. h'],
        correctAnswer: 'B. gh', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đầu đúng: ...ì đà.',
        speakText: 'Chọn âm đầu đúng: Kì đà.',
        options: ['A. c', 'B. k', 'C. q'],
        correctAnswer: 'B. k', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đầu đúng: ...ờ mờ.',
        speakText: 'Chọn âm đầu đúng: Giờ mờ.',
        options: ['A. gi', 'B. d', 'C. r'],
        correctAnswer: 'A. gi', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: ...àn cờ.',
        speakText: 'Chọn vần đúng: Bàn cờ.',
        options: ['A. an', 'B. ang', 'C. a'],
        correctAnswer: 'A. an', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: Cái ...ong.',
        speakText: 'Chọn vần đúng: Cái rổ.',
        options: ['A. rô', 'B. rổ', 'C. rỗ'],
        correctAnswer: 'B. rổ', lesson: 6
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: ...ợn béo.',
        speakText: 'Chọn vần đúng: Lợn béo.',
        options: ['A. lơn', 'B. lợn', 'C. lơn'],
        correctAnswer: 'B. lợn', lesson: 32
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: Cơm ...ơm.',
        speakText: 'Chọn vần đúng: Cơm thơm.',
        options: ['A. thom', 'B. thơm', 'C. thơp'],
        correctAnswer: 'B. thơm', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: ...ớp học.',
        speakText: 'Chọn vần đúng: Lớp học.',
        options: ['A. lớp', 'B. lắp', 'C. lốp'],
        correctAnswer: 'A. lớp', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: ...ẻ con.',
        speakText: 'Chọn vần đúng: Bé con.',
        options: ['A. bi', 'B. bê', 'C. bé'],
        correctAnswer: 'C. bé', lesson: 5
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: Gió ...ổi.',
        speakText: 'Chọn vần đúng: Gió thổi.',
        options: ['A. thổi', 'B. thỏi', 'C. thoi'],
        correctAnswer: 'A. thổi', lesson: 29
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: Nhỏ ...ắn.',
        speakText: 'Chọn vần đúng: Nhỏ nhắn.',
        options: ['A. nhăn', 'B. nhan', 'C. nhắn'],
        correctAnswer: 'C. nhắn', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng: Nhà ... sàn.',
        speakText: 'Chọn từ đúng: Nhà sàn.',
        options: ['A. xàn', 'B. sàn', 'C. xan'],
        correctAnswer: 'B. sàn', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng: Con ...',
        speakText: 'Chọn từ đúng: Con chuột.',
        options: ['A. chuộc', 'B. chuột', 'C. chuot'],
        correctAnswer: 'B. chuột', lesson: 29
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng: Đèn ....',
        speakText: 'Chọn từ đúng: Đèn pin.',
        options: ['A. pim', 'B. pin', 'C. bin'],
        correctAnswer: 'B. pin', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng: Cặp ....',
        speakText: 'Chọn từ đúng: Cặp sách.',
        options: ['A. sác', 'B. sách', 'C. xác'],
        correctAnswer: 'B. sách', lesson: 34
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng: Con ...m.',
        speakText: 'Chọn từ đúng: Con tôm.',
        options: ['A. tô', 'B. tôm', 'C. tớp'],
        correctAnswer: 'B. tôm', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng: Thuyền ....',
        speakText: 'Chọn từ đúng: Thuyền buồm.',
        options: ['A. buôn', 'B. buồm', 'C. buôp'],
        correctAnswer: 'B. buồm', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: ...á tre.',
        speakText: 'Chọn vần đúng: Lá tre.',
        options: ['A. La', 'B. Lá', 'C. Lã'],
        correctAnswer: 'B. Lá', lesson: 12
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn từ đúng: Sắp xếp ... hình.',
        speakText: 'Chọn từ đúng: Sắp xếp mô hình.',
        options: ['A. mo', 'B. mô', 'C. mu'],
        correctAnswer: 'B. mô', lesson: 7
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đầu đúng: ...ế quả.',
        speakText: 'Chọn âm đầu đúng: Khế quả.',
        options: ['A. c', 'B. kh', 'C. h'],
        correctAnswer: 'B. kh', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng: ...uối hè.',
        speakText: 'Chọn vần đúng: Cuối hè.',
        options: ['A. cuối', 'B. cuôi', 'C. cuốc'],
        correctAnswer: 'A. cuối', lesson: 29
    },
    
    // === DẠNG 4: TÌM TỪ KHÁC LOẠI (LOGIC) - 30 câu (Bài 1-36) ===
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Bò', 'B. Gà', 'C. Dì', 'D. Cá'],
        correctAnswer: 'C. Dì', 
        lesson: 6
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Khế', 'B. Na', 'C. Lá', 'D. Nho'],
        correctAnswer: 'C. Lá', 
        lesson: 12
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Bàn', 'B. Ghế', 'C. Giường', 'D. Giò'],
        correctAnswer: 'D. Giò', 
        lesson: 17
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Đỏ', 'B. Trắng', 'C. Thơm', 'D. Vàng'],
        correctAnswer: 'C. Thơm', 
        lesson: 16
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Cua', 'B. Rùa', 'C. Cá', 'D. Cỏ'],
        correctAnswer: 'D. Cỏ', 
        lesson: 6
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Ăn', 'B. Ngủ', 'C. Uống', 'D. Ghế'],
        correctAnswer: 'D. Ghế', 
        lesson: 5
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Quả', 'B. Bó', 'C. Củ', 'D. Bán'],
        correctAnswer: 'D. Bán', 
        lesson: 2
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Thỏ', 'B. Chuột', 'C. Vịt', 'D. Chim'],
        correctAnswer: 'B. Chuột', 
        lesson: 29
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Tròn', 'B. Vuông', 'C. Mềm', 'D. Dài'],
        correctAnswer: 'C. Mềm', 
        lesson: 36
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Lan', 'B. An', 'C. Đạt', 'D. Cờ'],
        correctAnswer: 'D. Cờ', 
        lesson: 31
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Mắt', 'B. Tai', 'C. Mũi', 'D. Bé'],
        correctAnswer: 'D. Bé', 
        lesson: 5
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Trắng', 'B. Đen', 'C. Tím', 'D. Lắm'],
        correctAnswer: 'D. Lắm', 
        lesson: 16
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Lớp', 'B. Bàn', 'C. Trường', 'D. Giường'],
        correctAnswer: 'A. Lớp', 
        lesson: 36
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Mùa', 'B. Hè', 'C. Xuân', 'D. Đông'],
        correctAnswer: 'A. Mùa', 
        lesson: 14
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Cá', 'B. Cờ', 'C. Vợ', 'D. Vở'],
        correctAnswer: 'A. Cá', 
        lesson: 7
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Chữ', 'B. Số', 'C. Vẽ', 'D. Tô'],
        correctAnswer: 'B. Số', 
        lesson: 25
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Nhà', 'B. Phố', 'C. Làng', 'D. Đèn'],
        correctAnswer: 'D. Đèn', 
        lesson: 24
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Phở', 'B. Lúa', 'C. Gạo', 'D. Cơm'],
        correctAnswer: 'A. Phở', 
        lesson: 26
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Bướm', 'B. Ong', 'C. Ve', 'D. Cỏ'],
        correctAnswer: 'D. Cỏ', 
        lesson: 27
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Bàn chân', 'B. Đầu gối', 'C. Vai', 'D. Bàn'],
        correctAnswer: 'D. Bàn', 
        lesson: 31
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Rửa', 'B. Lau', 'C. Sáng', 'D. Quét'],
        correctAnswer: 'C. Sáng', 
        lesson: 21
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Chim sẻ', 'B. Vịt bầu', 'C. Gà ri', 'D. Bò'],
        correctAnswer: 'D. Bò', 
        lesson: 6
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Nước', 'B. Sữa', 'C. Giấy', 'D. Trà'],
        correctAnswer: 'C. Giấy', 
        lesson: 28
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Ghế gỗ', 'B. Bàn học', 'C. Cờ', 'D. Giường tre'],
        correctAnswer: 'C. Cờ', 
        lesson: 3
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Sách', 'B. Vở', 'C. Bút', 'D. Tôm'],
        correctAnswer: 'D. Tôm', 
        lesson: 36
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Ăn cơm', 'B. Đi chợ', 'C. Bơi', 'D. Nhảy'],
        correctAnswer: 'B. Đi chợ', 
        lesson: 10
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Màu hồng', 'B. Màu xanh', 'C. Màu vàng', 'D. Màu cam'],
        correctAnswer: 'D. Màu cam', 
        lesson: 16
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Nấu', 'B. Nướng', 'C. Rán', 'D. Bát'],
        correctAnswer: 'D. Bát', 
        lesson: 25
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Xa', 'B. Gần', 'C. Cao', 'D. Chơi'],
        correctAnswer: 'D. Chơi', 
        lesson: 27
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Nhảy dây', 'B. Đá bóng', 'C. Đọc sách', 'D. Đếm'],
        correctAnswer: 'D. Đếm', 
        lesson: 34
    },

    // === DẠNG 5: SẮP XẾP TỪ (SCRAMBLE) - 30 câu (Bài 1-36) ===
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['bé', 'bế', 'Bà'],
        correctAnswer: ['Bà', 'bế', 'bé'],
        lesson: 5
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['có', 'Bò', 'cỏ'],
        correctAnswer: ['Bò', 'có', 'cỏ'],
        lesson: 6
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['cờ', 'Cá'],
        correctAnswer: ['Cá', 'cờ'],
        lesson: 3
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['đi', 'đò', 'Dì'],
        correctAnswer: ['Dì', 'đi', 'đò'],
        lesson: 8
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['gỗ', 'Ghế'],
        correctAnswer: ['Ghế', 'gỗ'],
        lesson: 5
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['bà', 'Giỗ'],
        correctAnswer: ['Giỗ', 'bà'],
        lesson: 7
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['đi', 'đò', 'Bố'],
        correctAnswer: ['Bố', 'đi', 'đò'],
        lesson: 8
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['có', 'Bố', 'ô', 'tô'],
        correctAnswer: ['Bố', 'có', 'ô', 'tô'],
        lesson: 7
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['non', 'lá', 'Na'],
        correctAnswer: ['Na', 'lá', 'non'],
        lesson: 14
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['vẽ', 'Bé', 'cờ', 'đỏ'],
        correctAnswer: ['Bé', 'vẽ', 'cờ', 'đỏ'],
        lesson: 3
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['bộ', 'đi', 'Bố'],
        correctAnswer: ['Bố', 'đi', 'bộ'],
        lesson: 9
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['nhỏ', 'Chó'],
        correctAnswer: ['Chó', 'nhỏ'],
        lesson: 14
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['gỗ', 'có', 'Rìu'],
        correctAnswer: ['Rìu', 'có', 'gỗ'],
        lesson: 21
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['chợ', 'Mẹ', 'đi'],
        correctAnswer: ['Mẹ', 'đi', 'chợ'],
        lesson: 10
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['phở', 'ăn', 'Bố'],
        correctAnswer: ['Bố', 'ăn', 'phở'],
        lesson: 26
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['cỏ', 'tha', 'Thỏ'],
        correctAnswer: ['Thỏ', 'tha', 'cỏ'],
        lesson: 23
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['sách', 'Cặp'],
        correctAnswer: ['Cặp', 'sách'],
        lesson: 34
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['cơm', 'ăn', 'Bé'],
        correctAnswer: ['Bé', 'ăn', 'cơm'],
        lesson: 36
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['nhà', 'Phố'],
        correctAnswer: ['Phố', 'nhà'],
        lesson: 27
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['giấy', 'Tờ'],
        correctAnswer: ['Tờ', 'giấy'],
        lesson: 28
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['cửa', 'Chuột'],
        correctAnswer: ['Chuột', 'cửa'],
        lesson: 29
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['đèn', 'Pin'],
        correctAnswer: ['Đèn', 'pin'],
        lesson: 33
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành từ có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành từ có nghĩa:',
        scrambledWords: ['bàn', 'Chân'],
        correctAnswer: ['Bàn', 'chân'],
        lesson: 31
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['lợn', 'nhỏ', 'Con'],
        correctAnswer: ['Con', 'lợn', 'nhỏ'],
        lesson: 32
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['sàn', 'Nhà', 'gỗ'],
        correctAnswer: ['Nhà', 'sàn', 'gỗ'],
        lesson: 31
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['mì', 'Bố', 'ăn'],
        correctAnswer: ['Bố', 'ăn', 'mì'],
        lesson: 14
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['sữa', 'bé', 'ca'],
        correctAnswer: ['Ca', 'sữa', 'bé'],
        lesson: 2
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['vở', 'Mẹ', 'mua'],
        correctAnswer: ['Mẹ', 'mua', 'vở'],
        lesson: 7
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['tre', 'có', 'Bụi'],
        correctAnswer: ['Bụi', 'tre', 'có'],
        lesson: 23
    },
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['Hộp', 'sữa', 'tôm', 'và'],
        correctAnswer: ['Hộp', 'sữa', 'và', 'tôm'],
        lesson: 36
    },

    // === DẠNG 6: TÌM ÂM/VẦN ĐÚNG (LUẬT CHÍNH TẢ) - 30 câu (Bài 1-36) ===
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Cá cờ', 'B. Cá kờ', 'C. Cá quờ'],
        correctAnswer: 'A. Cá cờ', 
        lesson: 3
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Giường', 'B. Dường', 'C. Rường'],
        correctAnswer: 'A. Giường', 
        lesson: 17
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Kì đà', 'B. Cì đà', 'C. Quì đà'],
        correctAnswer: 'A. Kì đà', 
        lesson: 11
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Gà gô', 'B. Ghà gô', 'C. Nghà gô'],
        correctAnswer: 'A. Gà gô', 
        lesson: 17
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Ngôi nhà', 'B. Nghôi nhà'],
        correctAnswer: 'A. Ngôi nhà', 
        lesson: 19
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Nghĩ ngợi', 'B. Ngĩ ngợi'],
        correctAnswer: 'A. Nghĩ ngợi', 
        lesson: 19
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Bó cỏ', 'B. Bó ko'],
        correctAnswer: 'A. Bó cỏ', 
        lesson: 6
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Giỏ hoa', 'B. Rổ hoa'],
        correctAnswer: 'A. Giỏ hoa', 
        lesson: 17
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Chơi đùa', 'B. Trơi đùa'],
        correctAnswer: 'A. Chơi đùa', 
        lesson: 14
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Sắc sảo', 'B. Xắc xảo'],
        correctAnswer: 'A. Sắc sảo', 
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Sô cô la', 'B. Xô cô la'],
        correctAnswer: 'A. Sô cô la', 
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Dưa hấu', 'B. Rưa hấu'],
        correctAnswer: 'A. Dưa hấu', 
        lesson: 8
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Rảnh rỗi', 'B. Giảnh giỗi'],
        correctAnswer: 'A. Rảnh rỗi', 
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Chiếc thuyền', 'B. Chiếc thuyền'],
        correctAnswer: 'B. Chiếc thuyền', 
        lesson: 23
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Lúa chín', 'B. Lúa chín'],
        correctAnswer: 'A. Lúa chín', 
        lesson: 14
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền âm đầu đúng: ...uê hương.',
        speakText: 'Điền âm đầu đúng: Quê hương.',
        options: ['A. Qu', 'B. C', 'C. K'],
        correctAnswer: 'A. Qu', 
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền âm đầu đúng: ...ẻ gỗ.',
        speakText: 'Điền âm đầu đúng: Kẻ gỗ.',
        options: ['A. C', 'B. K'],
        correctAnswer: 'B. K', 
        lesson: 11
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền âm đầu đúng: ...ìu rìu.',
        speakText: 'Điền âm đầu đúng: Rìu rìu.',
        options: ['A. D', 'B. Gi', 'C. R'],
        correctAnswer: 'C. R', 
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Phô ...ở.',
        speakText: 'Điền vần đúng: Vở học.',
        options: ['A. vỡ', 'B. vở'],
        correctAnswer: 'B. vở', 
        lesson: 7
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: ...an can.',
        speakText: 'Điền vần đúng: Lan can.',
        options: ['A. Lan', 'B. Làn'],
        correctAnswer: 'A. Lan', 
        lesson: 31
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Xe ...ạp.',
        speakText: 'Điền vần đúng: Xe đạp.',
        options: ['A. đap', 'B. đạp'],
        correctAnswer: 'B. đạp', 
        lesson: 30
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Hòm ....',
        speakText: 'Điền vần đúng: Hòm đồ.',
        options: ['A. om', 'B. op'],
        correctAnswer: 'A. om', 
        lesson: 36
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: ...uồn tôm.',
        speakText: 'Điền vần đúng: Buồn tôm.',
        options: ['A. uôn', 'B. uông'],
        correctAnswer: 'A. uôn', 
        lesson: 36
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Cặp ...ách.',
        speakText: 'Điền vần đúng: Cặp sách.',
        options: ['A. ach', 'B. anh'],
        correctAnswer: 'A. ach', 
        lesson: 34
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Quả ...am.',
        speakText: 'Điền vần đúng: Quả cam.',
        options: ['A. am', 'B. ap'],
        correctAnswer: 'A. am', 
        lesson: 34
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Con ...ợn.',
        speakText: 'Điền vần đúng: Con lợn.',
        options: ['A. ơn', 'B. ơp'],
        correctAnswer: 'A. ơn', 
        lesson: 32
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Cây ...anh.',
        speakText: 'Điền vần đúng: Cây xanh.',
        options: ['A. xan', 'B. xanh'],
        correctAnswer: 'B. xanh', 
        lesson: 31
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: ...ợp tác.',
        speakText: 'Điền vần đúng: Hợp tác.',
        options: ['A. hợp', 'B. hơn'],
        correctAnswer: 'A. hợp', 
        lesson: 36
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Thỏ thau', 'B. Thỏ tha'],
        correctAnswer: 'B. Thỏ tha', 
        lesson: 23
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Giỗ tổ', 'B. Dỗ tổ'],
        correctAnswer: 'A. Giỗ tổ', 
        lesson: 17
    }
];
