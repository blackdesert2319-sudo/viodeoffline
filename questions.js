// Tệp questions.js (ĐÃ CẬP NHẬT 150 CÂU HỎI HỢP CHUẨN ĐẾN BÀI 36)

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
        questionText: 'Có bao nhiêu chữ "g" trong câu: Gà gô có giò.',
        speakText: 'Có bao nhiêu chữ gờ trong câu: Gà gô có giò.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 17
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
        questionText: 'Có bao nhiêu chữ "ơm" trong câu: Cơm thơm cơm dẻo.',
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
        questionText: 'Bấm vào tất cả các vần "an" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần an trong câu sau:',
        sentence: 'Lan can nhà bà.',
        correctAnswers: ['an'], lesson: 31
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "in" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần in trong câu sau:',
        sentence: 'Con chim xinh.',
        correctAnswers: ['im', 'in'], lesson: 33
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các vần "un" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần un trong câu sau:',
        sentence: 'Con chuột run.',
        correctAnswers: ['un'], lesson: 33
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
        questionText: 'Bấm vào tất cả các vần "ôm" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các vần ôm trong câu sau:',
        sentence: 'Đồ xốp mềm.',
        correctAnswers: ['ôm'], lesson: 36
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
        questionText: 'Bấm vào tất cả các chữ "u" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các chữ u trong câu sau:',
        sentence: 'Mũ vải, túi lụa.',
        correctAnswers: ['u'], lesson: 13
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các chữ "ô" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các chữ ô trong câu sau:',
        sentence: 'Hồ bơi có cá rô.',
        correctAnswers: ['ô'], lesson: 7
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các chữ "e" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các chữ e trong câu sau:',
        sentence: 'Lá tre xanh mướt.',
        correctAnswers: ['e'], lesson: 5
    },
    {
        type: 'click_and_find',
        questionText: 'Bấm vào tất cả các chữ "ư" trong câu sau:',
        speakText: 'Bé hãy bấm vào tất cả các chữ ư trong câu sau:',
        sentence: 'Sư tử gừ gừ.',
        correctAnswers: ['ư'], lesson: 13
    },

    // === DẠNG 3: TRẮC NGHIỆM (NỘI DUNG) - 30 câu (Bài 1-36) ===
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: ...ú mèo.',
        speakText: 'Bé hãy chọn âm chờ hay âm trờ để điền vào chỗ trống: ...ú mèo.',
        options: ['A. ch', 'B. tr'],
        correctAnswer: 'A. ch', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: ...e xanh.',
        speakText: 'Bé hãy chọn âm chờ hay âm trờ để điền vào chỗ trống: ...e xanh.',
        options: ['A. ch', 'B. tr'],
        correctAnswer: 'B. tr', lesson: 23
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: Cái ...ô.',
        speakText: 'Bé hãy chọn âm sờ hay âm xờ để điền vào chỗ trống: Cái ...ô.',
        options: ['A. s', 'B. x'],
        correctAnswer: 'B. x', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: Chim ...ẻ.',
        speakText: 'Bé hãy chọn âm sờ hay âm xờ để điền vào chỗ trống: Chim ...ẻ.',
        options: ['A. s', 'B. x'],
        correctAnswer: 'A. s', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: Dòng ...ông.',
        speakText: 'Bé hãy chọn âm sờ hay âm xờ để điền vào chỗ trống: Dòng ...ông.',
        options: ['A. s', 'B. x'],
        correctAnswer: 'A. s', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: ...a xôi.',
        speakText: 'Bé hãy chọn âm sờ hay âm xờ để điền vào chỗ trống: ...a xôi.',
        options: ['A. s', 'B. x'],
        correctAnswer: 'B. x', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: Hạt ...ẻ.',
        speakText: 'Bé hãy chọn âm giờ hay âm dờ để điền vào chỗ trống: Hạt ...ẻ.',
        options: ['A. d', 'B. gi'],
        correctAnswer: 'A. d', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: ...ao ...iếc.',
        speakText: 'Bé hãy chọn âm rờ hay âm giờ để điền vào chỗ trống: ...ao ...iếc.',
        options: ['A. r', 'B. gi'],
        correctAnswer: 'B. gi', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: ...a ...ào.',
        speakText: 'Bé hãy chọn âm rờ hay âm dờ để điền vào chỗ trống: ...a ...ào.',
        options: ['A. r', 'B. d'],
        correctAnswer: 'A. r', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: ...a ...ẻ.',
        speakText: 'Bé hãy chọn âm rờ hay âm dờ để điền vào chỗ trống: ...a ...ẻ.',
        options: ['A. r', 'B. d'],
        correctAnswer: 'B. d', lesson: 8
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: Hoa ...an.',
        speakText: 'Bé hãy chọn âm lờ hay âm nờ để điền vào chỗ trống: Hoa ...an.',
        options: ['A. l', 'B. n'],
        correctAnswer: 'A. l', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn âm đúng để điền vào chỗ trống: ...o ...ê.',
        speakText: 'Bé hãy chọn âm lờ hay âm nờ để điền vào chỗ trống: ...o ...ê.',
        options: ['A. l', 'B. n'],
        correctAnswer: 'B. n', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng để điền vào chỗ trống: C...n v...t.',
        speakText: 'Bé hãy chọn vần on hay vần ot để điền vào chỗ trống: C...n v...t.',
        options: ['A. on', 'B. ot'],
        correctAnswer: 'A. on', lesson: 32
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng để điền vào chỗ trống: H... h...t.',
        speakText: 'Bé hãy chọn vần on hay vần ot để điền vào chỗ trống: H... h...t.',
        options: ['A. on', 'B. ot'],
        correctAnswer: 'B. ot', lesson: 32
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng để điền vào chỗ trống: C...m ...ơm.',
        speakText: 'Bé hãy chọn vần om hay vần ơm để điền vào chỗ trống: C...m ...ơm.',
        options: ['A. om', 'B. ơm'],
        correctAnswer: 'B. ơm', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng để điền vào chỗ trống: Đ... ...óm.',
        speakText: 'Bé hãy chọn vần om hay vần ơm để điền vào chỗ trống: Đ... ...óm.',
        options: ['A. om', 'B. ơm'],
        correctAnswer: 'A. om', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng để điền vào chỗ trống: Th...m ...a.',
        speakText: 'Bé hãy chọn vần ôm hay vần am để điền vào chỗ trống: Th...m ...a.',
        options: ['A. ôm', 'B. am'],
        correctAnswer: 'B. am', lesson: 34
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng để điền vào chỗ trống: Ch... ...ôm.',
        speakText: 'Bé hãy chọn vần ôm hay vần am để điền vào chỗ trống: Ch... ...ôm.',
        options: ['A. ôm', 'B. am'],
        correctAnswer: 'A. ôm', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng để điền vào chỗ trống: Ng...n n...p.',
        speakText: 'Bé hãy chọn vần ăn hay vần ăp để điền vào chỗ trống: Ng...n n...p.',
        options: ['A. ăn', 'B. ăp'],
        correctAnswer: 'A. ăn', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Chọn vần đúng để điền vào chỗ trống: L...n b...nh.',
        speakText: 'Bé hãy chọn vần ăn hay vần anh để điền vào chỗ trống: L...n b...nh.',
        options: ['A. ăn', 'B. anh'],
        correctAnswer: 'A. ăn', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "g"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ gờ?',
        options: ['A. ga', 'B. ca', 'C. ka', 'D. qua'],
        correctAnswer: 'A. ga', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "gh"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ gờ ghép?',
        options: ['A. ga', 'B. go', 'C. gu', 'D. ghế'],
        correctAnswer: 'D. ghế', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "c"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ cờ?',
        options: ['A. ke', 'B. kê', 'C. ki', 'D. co'],
        correctAnswer: 'D. co', lesson: 3
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "k"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ ca?',
        options: ['A. ca', 'B. co', 'C. cu', 'D. kẻ'],
        correctAnswer: 'D. kẻ', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "ng"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ ngờ?',
        options: ['A. nga', 'B. nghe', 'C. nghi', 'D. na'],
        correctAnswer: 'A. nga', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "ngh"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ ngờ ghép?',
        options: ['A. ngã', 'B. ngõ', 'C. ngừ', 'D. nghĩ'],
        correctAnswer: 'D. nghĩ', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "nh"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ nhờ?',
        options: ['A. na', 'B. nha', 'C. nga', 'D. la'],
        correctAnswer: 'B. nha', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "ph"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ phờ?',
        options: ['A. ve', 'B. ba', 'C. fa', 'D. phở'],
        correctAnswer: 'D. phở', lesson: 26
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "th"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ thờ?',
        options: ['A. ta', 'B. tha', 'C. tra', 'D. kha'],
        correctAnswer: 'B. tha', lesson: 23
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào có chứa chữ "kh"?',
        speakText: 'Bé hãy tìm tiếng có chứa chữ khờ?',
        options: ['A. ca', 'B. ga', 'C. kha', 'D. ha'],
        correctAnswer: 'C. kha', lesson: 14
    },
    
    // === DẠNG 4: LUẬT CHÍNH TẢ (CHỌN TỪ ĐÚNG) - 30 câu (Bài 1-36) ===
    {
        type: 'multiple_choice',
        questionText: 'Âm "k" (ca) đi với các nguyên âm nào?',
        speakText: 'Âm ca đi với các nguyên âm nào?',
        options: ['A. a, o, u', 'B. i, e, ê', 'C. ơ, ư, y', 'D. o, ô, ơ'],
        correctAnswer: 'B. i, e, ê', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Âm "c" (cờ) đi với các nguyên âm nào?',
        speakText: 'Âm cờ đi với các nguyên âm nào?',
        options: ['A. i, e, ê', 'B. a, o, ô, ơ, u, ư', 'C. Chỉ a, o, ô', 'D. Chỉ i, e'],
        correctAnswer: 'B. a, o, ô, ơ, u, ư', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Âm "gh" (gờ ghép) đi với các nguyên âm nào?',
        speakText: 'Âm gờ ghép đi với các nguyên âm nào?',
        options: ['A. i, e, ê', 'B. a, o, u', 'C. ơ, ư, y', 'D. o, ô, ơ'],
        correctAnswer: 'A. i, e, ê', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Âm "g" (gờ đơn) đi với các nguyên âm nào?',
        speakText: 'Âm gờ đơn đi với các nguyên âm nào?',
        options: ['A. i, e, ê', 'B. a, o, ô, ơ, u, ư', 'C. Chỉ a, o, ô', 'D. Chỉ i, e'],
        correctAnswer: 'B. a, o, ô, ơ, u, ư', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Âm "ngh" (ngờ ghép) đi với các nguyên âm nào?',
        speakText: 'Âm ngờ ghép đi với các nguyên âm nào?',
        options: ['A. i, e, ê', 'B. a, o, u', 'C. ơ, ư, y', 'D. o, ô, ơ'],
        correctAnswer: 'A. i, e, ê', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Âm "ng" (ngờ đơn) đi với các nguyên âm nào?',
        speakText: 'Âm ngờ đơn đi với các nguyên âm nào?',
        options: ['A. i, e, ê', 'B. a, o, ô, ơ, u, ư', 'C. Chỉ a, o, ô', 'D. Chỉ i, e'],
        correctAnswer: 'B. a, o, ô, ơ, u, ư', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Để điền vào tiếng "...im", ta dùng âm nào?',
        speakText: 'Để điền vào tiếng ...im, ta dùng âm cờ hay ca?',
        options: ['A. c', 'B. k'],
        correctAnswer: 'B. k', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Để điền vào tiếng "...a", ta dùng âm nào?',
        speakText: 'Để điền vào tiếng ...a, ta dùng âm cờ hay ca?',
        options: ['A. c', 'B. k'],
        correctAnswer: 'A. c', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Để điền vào tiếng "...e", ta dùng âm nào?',
        speakText: 'Để điền vào tiếng ...e, ta dùng âm gờ hay gờ ghép?',
        options: ['A. g', 'B. gh'],
        correctAnswer: 'B. gh', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Để điền vào tiếng "...a", ta dùng âm nào?',
        speakText: 'Để điền vào tiếng ...a, ta dùng âm gờ hay gờ ghép?',
        options: ['A. g', 'B. gh'],
        correctAnswer: 'A. g', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Để điền vào tiếng "...ê", ta dùng âm nào?',
        speakText: 'Để điền vào tiếng ...ê, ta dùng âm ngờ hay ngờ ghép?',
        options: ['A. ng', 'B. ngh'],
        correctAnswer: 'B. ngh', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Để điền vào tiếng "...u", ta dùng âm nào?',
        speakText: 'Để điền vào tiếng ...u, ta dùng âm ngờ hay ngờ ghép?',
        options: ['A. ng', 'B. ngh'],
        correctAnswer: 'A. ng', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Kì', 'B. Cì'],
        correctAnswer: 'A. Kì', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Cụ', 'B. Kụ'],
        correctAnswer: 'A. Cụ', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Ge', 'B. Ghe'],
        correctAnswer: 'B. Ghe', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Ga', 'B. Gha'],
        correctAnswer: 'A. Ga', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Ngê', 'B. Nghê'],
        correctAnswer: 'B. Nghê', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết ĐÚNG chính tả?',
        speakText: 'Tiếng nào viết đúng chính tả?',
        options: ['A. Ngò', 'B. Nghò'],
        correctAnswer: 'A. Ngò', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Ca', 'B. Cò', 'C. Ki', 'D. Cư'],
        correctAnswer: 'C. Ki', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Kì', 'B. Kẽ', 'C. Cú', 'D. Ka'],
        correctAnswer: 'D. Ka', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Ga', 'B. Gò', 'C. Ghi', 'D. Gù'],
        correctAnswer: 'C. Ghi', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Ghì', 'B. Ghế', 'C. Gỗ', 'D. Gha'],
        correctAnswer: 'D. Gha', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Nga', 'B. Ngò', 'C. Nghi', 'D. Ngù'],
        correctAnswer: 'C. Nghi', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng nào viết SAI chính tả?',
        speakText: 'Tiếng nào viết sai chính tả?',
        options: ['A. Nghì', 'B. Nghé', 'C. Ngỗ', 'D. Ngha'],
        correctAnswer: 'D. Ngha', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng "Ghẹ" dùng âm gì?',
        speakText: 'Tiếng Ghẹ dùng âm gì?',
        options: ['A. g', 'B. gh'],
        correctAnswer: 'B. gh', lesson: 18
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng "Gà" dùng âm gì?',
        speakText: 'Tiếng Gà dùng âm gì?',
        options: ['A. g', 'B. gh'],
        correctAnswer: 'A. g', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng "Nghệ" dùng âm gì?',
        speakText: 'Tiếng Nghệ dùng âm gì?',
        options: ['A. ng', 'B. ngh'],
        correctAnswer: 'B. ngh', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng "Ngà" (voi) dùng âm gì?',
        speakText: 'Tiếng Ngà voi dùng âm gì?',
        options: ['A. ng', 'B. ngh'],
        correctAnswer: 'A. ng', lesson: 19
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng "Kéo" dùng âm gì?',
        speakText: 'Tiếng Kéo dùng âm gì?',
        options: ['A. c', 'B. k'],
        correctAnswer: 'B. k', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Tiếng "Cốc" dùng âm gì?',
        speakText: 'Tiếng Cốc dùng âm gì?',
        options: ['A. c', 'B. k'],
        correctAnswer: 'A. c', lesson: 3
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
    {
        type: 'scramble',
        questionText: 'Sắp xếp các tiếng sau thành câu có nghĩa:',
        speakText: 'Bé hãy sắp xếp các tiếng sau thành câu có nghĩa:',
        scrambledWords: ['nghỉ', 'Bé', 'ngơi'],
        correctAnswer: ['Bé', 'nghỉ', 'ngơi'],
        lesson: 19
    }
];
