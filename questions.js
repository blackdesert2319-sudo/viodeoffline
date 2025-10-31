// Tệp questions.js (ĐÃ SỬA LỖI ĐẾM LẦN CUỐI & SỬA LỖI "chú mèo")
// 180 câu - 6 Dạng - Đến Bài 36

const questions = [
    
    // === DẠNG 1: ĐẾM SỐ CHỮ CÁI (30 câu) ===
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "b" trong câu: Bà bế bé.',
        speakText: 'Có bao nhiêu chữ bờ trong câu: Bà bế bé.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3', lesson: 2
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "a" trong câu: Bà bế bé.',
        speakText: 'Có bao nhiêu chữ a trong câu: Bà bế bé.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1', lesson: 2
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ê" trong câu: Bà bế bé.',
        speakText: 'Có bao nhiêu chữ ê trong câu: Bà bế bé.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 5
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "e" trong câu: Bà bế bé.',
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
        questionText: 'Có bao nhiêu chữ "o" trong câu: Bò có cỏ.',
        speakText: 'Có bao nhiêu chữ o trong câu: Bò có cỏ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3', lesson: 6
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
        questionText: 'Có bao nhiêu chữ "ê" trong câu: Ve kêu ve ve.',
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
        questionText: 'Có bao nhiêu chữ "ô" trong câu: Bé có ghế gỗ.',
        speakText: 'Có bao nhiêu chữ ô trong câu: Bé có ghế gỗ.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 7
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "g" trong câu: Gà gô có giò.',
        speakText: 'Có bao nhiêu chữ gờ trong câu: Gà gô có giò.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "o" trong câu: Gà gô có giò.',
        speakText: 'Có bao nhiêu chữ o trong câu: Gà gô có giò.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "h" trong câu: Hồ có hoa.',
        speakText: 'Có bao nhiêu chữ hờ trong câu: Hồ có hoa.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2', lesson: 12
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "i" trong câu: Dì đi chợ.',
        speakText: 'Có bao nhiêu chữ i trong câu: Dì đi chợ.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'B. 2', lesson: 11
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
        correctAnswer: 'C. 3', lesson: 14
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
        correctAnswer: 'B. 2', lesson: 21
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
        questionText: 'Có bao nhiêu chữ "ă" trong câu: Lan can nhà bà.',
        speakText: 'Có bao nhiêu chữ á trong câu: Lan can nhà bà.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'A. 0', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "e" trong câu: Cây tre đen.',
        speakText: 'Có bao nhiêu chữ e trong câu: Cây tre đen.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "i" trong câu: Con chim xinh.',
        speakText: 'Có bao nhiêu chữ i trong câu: Con chim xinh.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "u" trong câu: Con chuột run.',
        speakText: 'Có bao nhiêu chữ u trong câu: Con chuột run.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "a" trong câu: Cam thơm cam nhà.',
        speakText: 'Có bao nhiêu chữ a trong câu: Cam thơm cam nhà.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 34
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "o" trong câu: Hòm gỗ hòm sắt.',
        speakText: 'Có bao nhiêu chữ o trong câu: Hòm gỗ hòm sắt.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu chữ "ô" trong câu: Đồ xốp mềm.',
        speakText: 'Có bao nhiêu chữ ô trong câu: Đồ xốp mềm.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ơm" trong câu: Cơm thơm cơm dẻo.',
        speakText: 'Có bao nhiêu vần ơm trong câu: Cơm thơm cơm dẻo.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "ng" trong câu: Ngà voi nhà ngói.',
        speakText: 'Có bao nhiêu âm ngờ trong câu: Ngà voi nhà ngói.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "ngh" trong câu: Nghĩ ngợi nghỉ ngơi.',
        speakText: 'Có bao nhiêu âm ngờ ghép trong câu: Nghĩ ngợi nghỉ ngơi.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 19
    },

    // === DẠNG 2: BẤM TÌM (GẠCH CHÂN) - 30 câu ===
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các âm "b" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các âm bờ trong câu sau:',
        sentence: 'Ba bế bé.',
        correctAnswers: ['B', 'b'], lesson: 2
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
        questionText: 'Bấm vào tất cả các vần "an" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần an trong câu sau:',
        sentence: 'Lan can nhà bà.',
        correctAnswers: ['an'], lesson: 31
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "in" và "im" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần in và im trong câu sau:',
        sentence: 'Con chim xinh.',
        correctAnswers: ['im', 'inh'], lesson: 33
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "un" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần un trong câu sau:',
        sentence: 'Con chuột run.',
        correctAnswers: ['uô', 'un'], lesson: 33
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "am" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần am trong câu sau:',
        sentence: 'Cam thơm cam nhà.',
        correctAnswers: ['am'], lesson: 34
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "om" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần om trong câu sau:',
        sentence: 'Hòm gỗ hòm sắt.',
        correctAnswers: ['om'], lesson: 36
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "ôm" và "ôp" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần ôm và ôp trong câu sau:',
        sentence: 'Đồ xốp mềm.',
        correctAnswers: ['ô', 'ốp'], lesson: 36
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "ơm" trong câu sau:',
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
        questionText: 'Bấm vào tất cả các vần "u" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần u trong câu sau:',
        sentence: 'Mũ vải, túi lụa.',
        correctAnswers: ['u'], lesson: 13
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "ô" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần ô trong câu sau:',
        sentence: 'Hồ bơi có cá rô.',
        correctAnswers: ['ồ', 'ô'], lesson: 7
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "e" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần e trong câu sau:',
        sentence: 'Lá tre xanh mướt.',
        correctAnswers: ['e'], lesson: 5
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "ư" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần ư trong câu sau:',
        sentence: 'Sư tử gừ gừ.',
        correctAnswers: ['ư'], lesson: 13
    },

    // === DẠNG 3: TÌM CHỮ TRONG TIẾNG (30 câu) ===
    {
        type: 'find_word', // Dạng 3 (theo file docx)
        questionText: 'Chữ "r" có trong tiếng nào sau đây?',
        speakText: 'Chữ rờ có trong tiếng nào sau đây?',
        options: ['A. na', 'B. rắn', 'C. dặm', 'D. su'],
        correctAnswer: 'B. rắn', lesson: 21
    },
    {
        type: 'find_word',
        questionText: 'Chữ "r" KHÔNG có trong tiếng nào sau đây?',
        speakText: 'Chữ rờ không có trong tiếng nào sau đây?',
        options: ['A. ra', 'B. rắn', 'C. dặm', 'D. run'],
        correctAnswer: 'C. dặm', lesson: 21
    },
    {
        type: 'find_word',
        questionText: 'Chữ "s" có trong tiếng nào sau đây?',
        speakText: 'Chữ sờ có trong tiếng nào sau đây?',
        options: ['A. xa', 'B. su su', 'C. xôi', 'D. xẻ'],
        correctAnswer: 'B. su su', lesson: 21
    },
    {
        type: 'find_word',
        questionText: 'Chữ "x" có trong tiếng nào sau đây?',
        speakText: 'Chữ xờ có trong tiếng nào sau đây?',
        options: ['A. sa', 'B. sẻ', 'C. xe', 'D. sôi'],
        correctAnswer: 'C. xe', lesson: 21
    },
    {
        type: 'find_word',
        questionText: 'Chữ "ch" có trong tiếng nào sau đây?',
        speakText: 'Chữ chờ có trong tiếng nào sau đây?',
        options: ['A. tre', 'B. chó', 'C. trăn', 'D. ca'],
        correctAnswer: 'B. chó', lesson: 14
    },
    {
        type: 'find_word',
        questionText: 'Chữ "tr" có trong tiếng nào sau đây?',
        speakText: 'Chữ trờ có trong tiếng nào sau đây?',
        options: ['A. che', 'B. chú', 'C. tre', 'D. cờ'],
        correctAnswer: 'C. tre', lesson: 22
    },
    {
        type: 'find_word',
        questionText: 'Chữ "g" có trong tiếng nào sau đây?',
        speakText: 'Chữ gờ có trong tiếng nào sau đây?',
        options: ['A. ghế', 'B. gà', 'C. ghi', 'D. ghẹ'],
        correctAnswer: 'B. gà', lesson: 17
    },
    {
        type: 'find_word',
        questionText: 'Chữ "gh" có trong tiếng nào sau đây?',
        speakText: 'Chữ gờ ghép có trong tiếng nào sau đây?',
        options: ['A. ga', 'B. gõ', 'C. gù', 'D. ghế'],
        correctAnswer: 'D. ghế', lesson: 18
    },
    {
        type: 'find_word',
        questionText: 'Chữ "k" có trong tiếng nào sau đây?',
        speakText: 'Chữ ca có trong tiếng nào sau đây?',
        options: ['A. ca', 'B. co', 'C. cu', 'D. kẻ'],
        correctAnswer: 'D. kẻ', lesson: 11
    },
    {
        type: 'find_word',
        questionText: 'Chữ "c" có trong tiếng nào sau đây?',
        speakText: 'Chữ cờ có trong tiếng nào sau đây?',
        options: ['A. ki', 'B. kê', 'C. ke', 'D. co'],
        correctAnswer: 'D. co', lesson: 3
    },
    {
        type: 'find_word',
        questionText: 'Chữ "ng" có trong tiếng nào sau đây?',
        speakText: 'Chữ ngờ có trong tiếng nào sau đây?',
        options: ['A. nga', 'B. nghe', 'C. nghi', 'D. na'],
        correctAnswer: 'A. nga', lesson: 19
    },
    {
        type: 'find_word',
        questionText: 'Chữ "ngh" có trong tiếng nào sau đây?',
        speakText: 'Chữ ngờ ghép có trong tiếng nào sau đây?',
        options: ['A. ngã', 'B. ngõ', 'C. ngừ', 'D. nghĩ'],
        correctAnswer: 'D. nghĩ', lesson: 19
    },
    {
        type: 'find_word',
        questionText: 'Chữ "l" có trong tiếng nào sau đây?',
        speakText: 'Chữ lờ có trong tiếng nào sau đây?',
        options: ['A. na', 'B. la', 'C. ma', 'D. ba'],
        correctAnswer: 'B. la', lesson: 12
    },
    {
        type: 'find_word',
        questionText: 'Chữ "n" có trong tiếng nào sau đây?',
        speakText: 'Chữ nờ có trong tiếng nào sau đây?',
        options: ['A. lá', 'B. no', 'C. lo', 'D. mò'],
        correctAnswer: 'B. no', lesson: 14
    },
    {
        type: 'find_word',
        questionText: 'Chữ "nh" có trong tiếng nào sau đây?',
        speakText: 'Chữ nhờ có trong tiếng nào sau đây?',
        options: ['A. na', 'B. nha', 'C. nga', 'D. la'],
        correctAnswer: 'B. nha', lesson: 18
    },
    {
        type: 'find_word',
        questionText: 'Chữ "ph" có trong tiếng nào sau đây?',
        speakText: 'Chữ phờ có trong tiếng nào sau đây?',
        options: ['A. ve', 'B. ba', 'C. fa', 'D. phở'],
        correctAnswer: 'D. phở', lesson: 26
    },
    {
        type: 'find_word',
        questionText: 'Chữ "th" có trong tiếng nào sau đây?',
        speakText: 'Chữ thờ có trong tiếng nào sau đây?',
        options: ['A. ta', 'B. tha', 'C. tra', 'D. kha'],
        correctAnswer: 'B. tha', lesson: 23
    },
    {
        type: 'find_word',
        questionText: 'Chữ "kh" có trong tiếng nào sau đây?',
        speakText: 'Chữ khờ có trong tiếng nào sau đây?',
        options: ['A. ca', 'B. ga', 'C. kha', 'D. ha'],
        correctAnswer: 'C. kha', lesson: 14
    },
    {
        type: 'find_word',
        questionText: 'Chữ "qu" có trong tiếng nào sau đây?',
        speakText: 'Chữ quờ có trong tiếng nào sau đây?',
        options: ['A. ca', 'B. cu', 'C. qua', 'D. oai'],
        correctAnswer: 'C. qua', lesson: 26
    },
    {
        type: 'find_word',
        questionText: 'Chữ "gi" có trong tiếng nào sau đây?',
        speakText: 'Chữ gi có trong tiếng nào sau đây?',
        options: ['A. da', 'B. ra', 'C. gia', 'D. va'],
        correctAnswer: 'C. gia', lesson: 17
    },
    {
        type: 'find_word',
        questionText: 'Chữ "d" có trong tiếng nào sau đây?',
        speakText: 'Chữ dờ có trong tiếng nào sau đây?',
        options: ['A. da', 'B. ra', 'C. gia', 'D. va'],
        correctAnswer: 'A. da', lesson: 8
    },
    {
        type: 'find_word',
        questionText: 'Vần "an" có trong tiếng nào sau đây?',
        speakText: 'Vần an có trong tiếng nào sau đây?',
        options: ['A. bang', 'B. ban', 'C. bap', 'D. bat'],
        correctAnswer: 'B. ban', lesson: 31
    },
    {
        type: 'find_word',
        questionText: 'Vần "am" có trong tiếng nào sau đây?',
        speakText: 'Vần am có trong tiếng nào sau đây?',
        options: ['A. tam', 'B. tan', 'C. tang', 'D. tat'],
        correctAnswer: 'A. tam', lesson: 34
    },
    {
        type: 'find_word',
        questionText: 'Vần "on" có trong tiếng nào sau đây?',
        speakText: 'Vần on có trong tiếng nào sau đây?',
        options: ['A. mọn', 'B. mọt', 'C. móm', 'D. mọc'],
        correctAnswer: 'A. mọn', lesson: 32
    },
    {
        type: 'find_word',
        questionText: 'Vần "om" có trong tiếng nào sau đây?',
        speakText: 'Vần om có trong tiếng nào sau đây?',
        options: ['A. chòm', 'B. chót', 'C. chọn', 'D. chọc'],
        correctAnswer: 'A. chòm', lesson: 36
    },
    {
        type: 'find_word',
        questionText: 'Vần "ôm" có trong tiếng nào sau đây?',
        speakText: 'Vần ôm có trong tiếng nào sau đây?',
        options: ['A. thơm', 'B. tôm', 'C. xóm', 'D. tom'],
        correctAnswer: 'B. tôm', lesson: 36
    },
    {
        type: 'find_word',
        questionText: 'Vần "ơm" có trong tiếng nào sau đây?',
        speakText: 'Vần ơm có trong tiếng nào sau đây?',
        options: ['A. thơn', 'B. tôm', 'C. tơm', 'D. tom'],
        correctAnswer: 'A. thơm', lesson: 36
    },
    {
        type: 'find_word',
        questionText: 'Vần "ăn" có trong tiếng nào sau đây?',
        speakText: 'Vần ăn có trong tiếng nào sau đây?',
        options: ['A. khăn', 'B. khang', 'C. kham', 'D. khan'],
        correctAnswer: 'A. khăn', lesson: 31
    },
    {
        type: 'find_word',
        questionText: 'Vần "ân" có trong tiếng nào sau đây?',
        speakText: 'Vần ân có trong tiếng nào sau đây?',
        options: ['A. dân', 'B. dăn', 'C. dâng', 'D. dang'],
        correctAnswer: 'A. dân', lesson: 31
    },
    {
        type: 'find_word',
        questionText: 'Vần "in" có trong tiếng nào sau đây?',
        speakText: 'Vần in có trong tiếng nào sau đây?',
        options: ['A. tin', 'B. tinh', 'C. tim', 'D. tiêm'],
        correctAnswer: 'A. tin', lesson: 33
    },
    
    // === DẠNG 4: LUẬT CHÍNH TẢ (k/c, g/gh, ng/ngh) - 30 câu ===
    {
        type: 'check_spelling', // Dạng 4 (theo file docx)
        questionText: 'Chữ "k" có thể đi với nguyên âm nào?',
        speakText: 'Chữ ca có thể đi với nguyên âm nào?',
        options: ['A. e', 'B. u', 'C. a', 'D. ư'],
        correctAnswer: 'A. e', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Nguyên âm nào KHÔNG đi với chữ "k"?',
        speakText: 'Nguyên âm nào không đi với chữ ca?',
        options: ['A. i', 'B. e', 'C. ê', 'D. a'],
        correctAnswer: 'D. a', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Nguyên âm nào KHÔNG đi với chữ "c"?',
        speakText: 'Nguyên âm nào không đi với chữ cờ?',
        options: ['A. a', 'B. o', 'C. u', 'D. e'],
        correctAnswer: 'D. e', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Nguyên âm nào KHÔNG đi với chữ "gh"?',
        speakText: 'Nguyên âm nào không đi với chữ gờ ghép?',
        options: ['A. i', 'B. o', 'C. e', 'D. ê'],
        correctAnswer: 'B. o', lesson: 18
    },
    {
        type: 'check_spelling',
        questionText: 'Nguyên âm nào KHÔNG đi với chữ "g"?',
        speakText: 'Nguyên âm nào không đi với chữ gờ?',
        options: ['A. a', 'B. o', 'C. ê', 'D. u'],
        correctAnswer: 'C. ê', lesson: 18
    },
    {
        type: 'check_spelling',
        questionText: 'Nguyên âm nào KHÔNG đi với chữ "ngh"?',
        speakText: 'Nguyên âm nào không đi với chữ ngờ ghép?',
        options: ['A. i', 'B. e', 'C. ê', 'D. a'],
        correctAnswer: 'D. a', lesson: 19
    },
    {
        type: 'check_spelling',
        questionText: 'Nguyên âm nào KHÔNG đi với chữ "ng"?',
        speakText: 'Nguyên âm nào không đi với chữ ngờ?',
        options: ['A. a', 'B. o', 'C. u', 'D. i'],
        correctAnswer: 'D. i', lesson: 19
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Kì', 'B. Cì'],
        correctAnswer: 'A. Kì', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Cụ', 'B. Kụ'],
        correctAnswer: 'A. Cụ', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Ge', 'B. Ghe'],
        correctAnswer: 'B. Ghe', lesson: 18
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Ga', 'B. Gha'],
        correctAnswer: 'A. Ga', lesson: 18
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Ngê', 'B. Nghê'],
        correctAnswer: 'B. Nghê', lesson: 19
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Ngò', 'B. Nghò'],
        correctAnswer: 'A. Ngò', lesson: 19
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Ca', 'B. Cò', 'C. Ki', 'D. Cư'],
        correctAnswer: 'C. Ki', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Kì', 'B. Kẽ', 'C. Cú', 'D. Ka'],
        correctAnswer: 'D. Ka', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Ga', 'B. Gò', 'C. Ghi', 'D. Gù'],
        correctAnswer: 'C. Ghi', lesson: 18
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Ghì', 'B. Ghế', 'C. Gỗ', 'D. Gha'],
        correctAnswer: 'D. Gha', lesson: 18
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Nga', 'B. Ngò', 'C. Nghi', 'D. Ngù'],
        correctAnswer: 'C. Nghi', lesson: 19
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Nghì', 'B. Nghé', 'C. Ngỗ', 'D. Ngha'],
        correctAnswer: 'D. Ngha', lesson: 19
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng "Ghẹ" dùng âm gì?',
        speakText: 'Tiếng Ghẹ dùng âm gì?',
        options: ['A. g', 'B. gh'],
        correctAnswer: 'B. gh', lesson: 18
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng "Gà" dùng âm gì?',
        speakText: 'Tiếng Gà dùng âm gì?',
        options: ['A. g', 'B. gh'],
        correctAnswer: 'A. g', lesson: 17
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng "Nghệ" dùng âm gì?',
        speakText: 'Tiếng Nghệ dùng âm gì?',
        options: ['A. ng', 'B. ngh'],
        correctAnswer: 'B. ngh', lesson: 19
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng "Ngà" (voi) dùng âm gì?',
        speakText: 'Tiếng Ngà voi dùng âm gì?',
        options: ['A. ng', 'B. ngh'],
        correctAnswer: 'A. ng', lesson: 19
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng "Kéo" dùng âm gì?',
        speakText: 'Tiếng Kéo dùng âm gì?',
        options: ['A. c', 'B. k'],
        correctAnswer: 'B. k', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Tiếng "Cốc" dùng âm gì?',
        speakText: 'Tiếng Cốc dùng âm gì?',
        options: ['A. c', 'B. k'],
        correctAnswer: 'A. c', lesson: 3
    },
    {
        type: 'check_spelling',
        questionText: 'Chữ "k" đi với chữ nào sau đây?',
        speakText: 'Chữ ca đi với chữ nào sau đây?',
        options: ['A. i', 'B. o', 'C. a', 'D. u'],
        correctAnswer: 'A. i', lesson: 11
    },
    {
        type: 'check_spelling',
        questionText: 'Chữ "c" đi với chữ nào sau đây?',
        speakText: 'Chữ cờ đi với chữ nào sau đây?',
        options: ['A. i', 'B. e', 'C. ê', 'D. o'],
        correctAnswer: 'D. o', lesson: 3
    },
    {
        type: 'check_spelling',
        questionText: 'Chữ "gh" đi với chữ nào sau đây?',
        speakText: 'Chữ gờ ghép đi với chữ nào sau đây?',
        options: ['A. a', 'B. o', 'C. u', 'D. e'],
        correctAnswer: 'D. e', lesson: 18
    },
    {
        type: 'check_spelling',
        questionText: 'Chữ "g" đi với chữ nào sau đây?',
        speakText: 'Chữ gờ đi với chữ nào sau đây?',
        options: ['A. i', 'B. e', 'C. ê', 'D. a'],
        correctAnswer: 'D. a', lesson: 17
    },
    {
        type: 'check_spelling',
        questionText: 'Chữ "ngh" đi với chữ nào sau đây?',
        speakText: 'Chữ ngờ ghép đi với chữ nào sau đây?',
        options: ['A. a', 'B. o', 'C. ê', 'D. u'],
        correctAnswer: 'C. ê', lesson: 19
    },
    
    // === DẠNG 5: ĐIỀN CH/TR, S/X, R/D/GI, L/N (30 câu) ===
    {
        type: 'fill_in_blank', // Dạng 5 (theo file docx)
        questionText: 'Điền vào chỗ trống: ...ú mèo.',
        speakText: 'Bé hãy điền âm chờ hay âm trờ: ...ú mèo.', 
        options: ['A. ch', 'B. tr'],
        correctAnswer: 'A. ch', lesson: 22
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...e xanh.',
        speakText: 'Bé hãy điền âm chờ hay âm trờ: ...e xanh.', 
        options: ['A. ch', 'B. tr'],
        correctAnswer: 'B. tr', lesson: 22
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Cá ...ê.',
        speakText: 'Bé hãy điền âm chờ hay âm trờ: Cá ...ê.', 
        options: ['A. ch', 'B. tr'],
        correctAnswer: 'B. tr', lesson: 22
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Đi ...ợ.',
        speakText: 'Bé hãy điền âm chờ hay âm trờ: Đi ...ợ.', 
        options: ['A. ch', 'B. tr'],
        correctAnswer: 'A. ch', lesson: 22
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Cái ...ô.',
        speakText: 'Bé hãy điền âm sờ hay âm xờ: Cái ...ô.', 
        options: ['A. s', 'B. x'],
        correctAnswer: 'B. x', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Chim ...ẻ.',
        speakText: 'Bé hãy điền âm sờ hay âm xờ: Chim ...ẻ.', 
        options: ['A. s', 'B. x'],
        correctAnswer: 'A. s', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Dòng ...ông.',
        speakText: 'Bé hãy điền âm sờ hay âm xờ: Dòng ...ông.', 
        options: ['A. s', 'B. x'],
        correctAnswer: 'A. s', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...a xôi.',
        speakText: 'Bé hãy điền âm sờ hay âm xờ: ...a xôi.', 
        options: ['A. s', 'B. x'],
        correctAnswer: 'B. x', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...u ...u.',
        speakText: 'Bé hãy điền âm sờ hay âm xờ: ...u ...u.', 
        options: ['A. s', 'B. x'],
        correctAnswer: 'B. x', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...ung sướng.',
        speakText: 'Bé hãy điền âm sờ hay âm xờ: ...ung sướng.', 
        options: ['A. s', 'B. x'],
        correctAnswer: 'A. s', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Hạt ...ẻ.',
        speakText: 'Bé hãy điền âm giờ hay âm dờ: Hạt ...ẻ.', 
        options: ['A. d', 'B. gi'],
        correctAnswer: 'A. d', lesson: 17
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...ò mỡ.',
        speakText: 'Bé hãy điền âm giờ hay âm dờ: ...ò mỡ.', 
        options: ['A. d', 'B. gi'],
        correctAnswer: 'A. d', lesson: 17
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...an ...iản.',
        speakText: 'Bé hãy điền âm giờ hay âm dờ: ...an ...iản.', 
        options: ['A. d', 'B. gi'],
        correctAnswer: 'B. gi', lesson: 17
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...a ...ào.',
        speakText: 'Bé hãy điền âm rờ hay âm dờ: ...a ...ào.', 
        options: ['A. r', 'B. d'],
        correctAnswer: 'A. r', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...a ...ẻ.',
        speakText: 'Bé hãy điền âm rờ hay âm dờ: ...a ...ẻ.', 
        options: ['A. r', 'B. d'],
        correctAnswer: 'B. d', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...ỗ ...àng.',
        speakText: 'Bé hãy điền âm rờ hay âm dờ: ...ỗ ...àng.', 
        options: ['A. r', 'B. d'],
        correctAnswer: 'A. r', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...ao ...iếc.',
        speakText: 'Bé hãy điền âm rờ hay âm giờ: ...ao ...iếc.', 
        options: ['A. r', 'B. gi'],
        correctAnswer: 'B. gi', lesson: 17
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Cái ...ổ.',
        speakText: 'Bé hãy điền âm rờ hay âm giờ: Cái ...ổ.', 
        options: ['A. r', 'B. gi'],
        correctAnswer: 'A. r', lesson: 21
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Hoa ...an.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: Hoa ...an.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'A. l', lesson: 31
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...o ...ê.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: ...o ...ê.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'B. n', lesson: 14
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Cái ...á.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: Cái ...á.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'B. n', lesson: 14
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...o ...ắng.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: ...o ...ắng.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'A. l', lesson: 12
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...ên ...ết.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: ...ên ...ết.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'B. n', lesson: 14
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...á ...àng.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: ...á ...àng.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'A. l', lesson: 12
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Con ...ợn.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: Con ...ợn.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'A. l', lesson: 32
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...ội ...iêu.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: ...ội ...iêu.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'B. n', lesson: 14
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: Mẹ ...àm ...ụng.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: Mẹ ...àm ...ụng.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'A. l', lesson: 12
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...óng ...ực.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: ...óng ...ực.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'B. n', lesson: 14
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...ơm ...úa.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: ...ơm ...úa.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'A. l', lesson: 36
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vào chỗ trống: ...o ...ê.',
        speakText: 'Bé hãy điền âm lờ hay âm nờ: ...o ...ê.', 
        options: ['A. l', 'B. n'],
        correctAnswer: 'B. n', lesson: 14
    },
    
    // === DẠNG 6: SẮP XẾP TỪ (SCRAMBLE) - 30 câu ===
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
        scrambledWords: ['ăn', 'mì.', 'Bé'],
        correctAnswer: ['Bé', 'ăn', 'mì.'],
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
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['nghỉ', 'Bé', 'ngơi'],
        correctAnswer: ['Bé', 'nghỉ', 'ngơi'],
        lesson: 19
    }
];


