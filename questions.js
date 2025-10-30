// Đây là tệp 'questions.js'
// Tệp này CHỈ chứa thư viện câu hỏi

const questions = [


// Tệp questions.js (ĐÃ CẬP NHẬT 150 CÂU HỎI HỢP CHUẨN ĐẾN BÀI 36)

const questions = [
    
    // === DẠNG 1: TRẮC NGHIỆM (ĐẾM) - 30 câu (Bài 1-36) ===
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "b" trong câu: Ba bế bé.',
        speakText: 'Có bao nhiêu âm bờ trong câu: Ba bế bé.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'C. 3', lesson: 2
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "a" trong câu: Bà bế bé.',
        speakText: 'Có bao nhiêu vần a trong câu: Bà bế bé.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1', lesson: 2
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "c" trong câu: Cá cờ có cờ.',
        speakText: 'Có bao nhiêu âm cờ trong câu: Cá cờ có cờ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 3
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "o" trong câu: Bò có cỏ.',
        speakText: 'Có bao nhiêu vần o trong câu: Bò có cỏ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 6
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "v" trong câu: Ve kêu ve ve.',
        speakText: 'Có bao nhiêu âm vờ trong câu: Ve kêu ve ve.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 27
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "đ" trong câu: Dì đi đò.',
        speakText: 'Có bao nhiêu âm đờ trong câu: Dì đi đò.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'C. 2', lesson: 8
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ê" trong câu: Bé có ghế gỗ.',
        speakText: 'Có bao nhiêu vần ê trong câu: Bé có ghế gỗ.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 5
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "g" trong câu: Gà gô có giò.',
        speakText: 'Có bao nhiêu âm gờ trong câu: Gà gô có giò.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 17
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "h" trong câu: Hồ có hoa.',
        speakText: 'Có bao nhiêu âm hờ trong câu: Hồ có hoa.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 12
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "i" trong câu: Dì đi chợ.',
        speakText: 'Có bao nhiêu vần i trong câu: Dì đi chợ.',
        options: ['A. 1', 'B. 2', 'C. 0', 'D. 3'],
        correctAnswer: 'A. 1', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "k" trong câu: Kì đà bò ở kẽ đá.',
        speakText: 'Có bao nhiêu âm ca trong câu: Kì đà bò ở kẽ đá.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'B. 2', lesson: 11
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "l" trong câu: Lá lụa lá tre.',
        speakText: 'Có bao nhiêu âm lờ trong câu: Lá lụa lá tre.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 12
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "m" trong câu: Mẹ mua mía.',
        speakText: 'Có bao nhiêu âm mờ trong câu: Mẹ mua mía.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "n" trong câu: Na non na già.',
        speakText: 'Có bao nhiêu âm nờ trong câu: Na non na già.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "r" trong câu: Rìu gỗ rỉ.',
        speakText: 'Có bao nhiêu âm rờ trong câu: Rìu gỗ rỉ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "s" trong câu: Sẻ sà sà.',
        speakText: 'Có bao nhiêu âm sờ trong câu: Sẻ sà sà.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'C. 3', lesson: 21
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "ch" trong câu: Chú chó con.',
        speakText: 'Có bao nhiêu âm chờ trong câu: Chú chó con.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "kh" trong câu: Khế mua khế nhà.',
        speakText: 'Có bao nhiêu âm khờ trong câu: Khế mua khế nhà.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 14
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "ph" trong câu: Phở ngon phở bò.',
        speakText: 'Có bao nhiêu âm phờ trong câu: Phở ngon phở bò.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 26
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu âm "th" trong câu: Thỏ tha bó cỏ.',
        speakText: 'Có bao nhiêu âm thờ trong câu: Thỏ tha bó cỏ.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'A. 1', lesson: 23
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "an" trong câu: Lan can nhà bà.',
        speakText: 'Có bao nhiêu vần an trong câu: Lan can nhà bà.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 31
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "en" trong câu: Cây tre đen.',
        speakText: 'Có bao nhiêu vần en trong câu: Cây tre đen.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "in" trong câu: Con chim xinh.',
        speakText: 'Có bao nhiêu vần in trong câu: Con chim xinh.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'B. 1', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "un" trong câu: Con chuột run.',
        speakText: 'Có bao nhiêu vần un trong câu: Con chuột run.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        correctAnswer: 'A. 1', lesson: 33
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "am" trong câu: Cam thơm cam nhà.',
        speakText: 'Có bao nhiêu vần am trong câu: Cam thơm cam nhà.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 34
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "om" trong câu: Hòm gỗ hòm sắt.',
        speakText: 'Có bao nhiêu vần om trong câu: Hòm gỗ hòm sắt.',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        correctAnswer: 'B. 2', lesson: 36
    },
    {
        type: 'multiple_choice',
        questionText: 'Có bao nhiêu vần "ôm" trong câu: Đồ xốp mềm.',
        speakText: 'Có bao nhiêu vần ôm trong câu: Đồ xốp mềm.',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        correctAnswer: 'A. 0', lesson: 36
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
    
    // === DẠNG 2: ĐIỀN TỪ (NGUYÊN ÂM/PHỤ ÂM) - 30 câu (Bài 1-36) ===
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Bó c...',
        speakText: 'Điền vần còn thiếu: Bó cỏ.',
        correctAnswer: 'ỏ',
        hint: 'Nằm trong từ "cỏ".', lesson: 6
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Xe đ...',
        speakText: 'Điền vần còn thiếu: Xe đạp.',
        correctAnswer: 'ạp',
        hint: 'Nằm trong từ "đạp".', lesson: 30
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Cá h...',
        speakText: 'Điền vần còn thiếu: Cá hộp.',
        correctAnswer: 'ộp',
        hint: 'Nằm trong từ "hộp".', lesson: 36
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...à gô',
        speakText: 'Điền âm đầu còn thiếu: Gà gô.',
        correctAnswer: 'G',
        hint: 'Âm Gờ (Gà gô).', lesson: 17
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...i đà',
        speakText: 'Điền âm đầu còn thiếu: Kì đà.',
        correctAnswer: 'K',
        hint: 'Âm Ca (Kì đà).', lesson: 11
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...ó nhỏ',
        speakText: 'Điền âm đầu còn thiếu: Chó nhỏ.',
        correctAnswer: 'Ch',
        hint: 'Âm Chờ (Chó).', lesson: 14
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Tờ gi...',
        speakText: 'Điền vần còn thiếu: Tờ giấy.',
        correctAnswer: 'ấy',
        hint: 'Nằm trong từ "giấy".', lesson: 28
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Cá m...',
        speakText: 'Điền vần còn thiếu: Cá mè.',
        correctAnswer: 'è',
        hint: 'Nằm trong từ "mè".', lesson: 5
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...án nhà',
        speakText: 'Điền âm đầu còn thiếu: Bán nhà.',
        correctAnswer: 'B',
        hint: 'Âm Bờ (Bán).', lesson: 2
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...ô tô',
        speakText: 'Điền âm đầu còn thiếu: Ô tô.',
        correctAnswer: 'Ô',
        hint: 'Âm Ô (Ô tô).', lesson: 7
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Cây n...',
        speakText: 'Điền vần còn thiếu: Cây nêu.',
        correctAnswer: 'êu',
        hint: 'Nằm trong từ "nêu".', lesson: 27
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...uồn dừa',
        speakText: 'Điền âm đầu còn thiếu: Buồn dừa.',
        correctAnswer: 'B',
        hint: 'Âm Bờ (Buồn).', lesson: 2
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Lá d...',
        speakText: 'Điền vần còn thiếu: Lá dứa.',
        correctAnswer: 'ứa',
        hint: 'Nằm trong từ "dứa".', lesson: 25
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Con r...',
        speakText: 'Điền vần còn thiếu: Con rùa.',
        correctAnswer: 'ùa',
        hint: 'Nằm trong từ "rùa".', lesson: 25
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Phố x...',
        speakText: 'Điền vần còn thiếu: Phố xá.',
        correctAnswer: 'á',
        hint: 'Nằm trong từ "xá".', lesson: 27
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Mua l...',
        speakText: 'Điền vần còn thiếu: Mua len.',
        correctAnswer: 'en',
        hint: 'Nằm trong từ "len".', lesson: 33
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Bó r...',
        speakText: 'Điền vần còn thiếu: Bó rơm.',
        correctAnswer: 'ơm',
        hint: 'Nằm trong từ "rơm".', lesson: 36
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Đèn l...',
        speakText: 'Điền vần còn thiếu: Đèn lồng.',
        correctAnswer: 'ồng',
        hint: 'Nằm trong từ "lồng".', lesson: 24
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm cuối còn thiếu: Con l...',
        speakText: 'Điền âm cuối còn thiếu: Con lợn.',
        correctAnswer: 'ợn',
        hint: 'Nằm trong từ "lợn".', lesson: 32
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm cuối còn thiếu: Cái k...',
        speakText: 'Điền âm cuối còn thiếu: Cái kẹp.',
        correctAnswer: 'ẹp',
        hint: 'Nằm trong từ "kẹp".', lesson: 33
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm cuối còn thiếu: Trái c...',
        speakText: 'Điền âm cuối còn thiếu: Trái cam.',
        correctAnswer: 'am',
        hint: 'Nằm trong từ "cam".', lesson: 34
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm cuối còn thiếu: Con d...',
        speakText: 'Điền âm cuối còn thiếu: Con dê.',
        correctAnswer: 'ê',
        hint: 'Nằm trong từ "dê".', lesson: 5
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...ờ mờ',
        speakText: 'Điền âm đầu còn thiếu: Giờ mờ.',
        correctAnswer: 'Gi',
        hint: 'Âm Giờ (Giờ mờ).', lesson: 17
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Dán nhãn v...',
        speakText: 'Điền vần còn thiếu: Dán nhãn vở.',
        correctAnswer: 'ở',
        hint: 'Nằm trong từ "vở".', lesson: 7
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Cây ...anh',
        speakText: 'Điền vần còn thiếu: Cây xanh.',
        correctAnswer: 'x',
        hint: 'Âm Xờ (xanh).', lesson: 27
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: Con ...a',
        speakText: 'Điền vần còn thiếu: Con na.',
        correctAnswer: 'N',
        hint: 'Âm Nờ (na).', lesson: 14
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền vần còn thiếu: ...ó nhà',
        speakText: 'Điền vần còn thiếu: Nhỏ nhà.',
        correctAnswer: 'Nh',
        hint: 'Âm Nhờ (Nhỏ nhà).', lesson: 20
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...à lụa',
        speakText: 'Điền âm đầu còn thiếu: Tà lụa.',
        correctAnswer: 'T',
        hint: 'Âm Tờ (Tà lụa).', lesson: 23
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm đầu còn thiếu: ...iềm vui',
        speakText: 'Điền âm đầu còn thiếu: Niềm vui.',
        correctAnswer: 'N',
        hint: 'Âm Nờ (Niềm).', lesson: 14
    },
    {
        type: 'fill_in_blank',
        questionText: 'Điền âm cuối còn thiếu: Tập tô s...',
        speakText: 'Điền âm cuối còn thiếu: Tập tô số.',
        correctAnswer: 'ố',
        hint: 'Nằm trong từ "số".', lesson: 7
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
        correctAnswer: 'C. Dì', // Dì là người, còn lại là con vật.
        lesson: 6
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Khế', 'B. Na', 'C. Lá', 'D. Nho'],
        correctAnswer: 'C. Lá', // Lá là bộ phận, còn lại là quả.
        lesson: 12
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Bàn', 'B. Ghế', 'C. Giường', 'D. Giò'],
        correctAnswer: 'D. Giò', // Giò là thức ăn, còn lại là đồ nội thất.
        lesson: 17
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Đỏ', 'B. Trắng', 'C. Thơm', 'D. Vàng'],
        correctAnswer: 'C. Thơm', // Thơm là mùi, còn lại là màu sắc.
        lesson: 16
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Cua', 'B. Rùa', 'C. Cá', 'D. Cỏ'],
        correctAnswer: 'D. Cỏ', // Cỏ là thực vật, còn lại là động vật.
        lesson: 6
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Ăn', 'B. Ngủ', 'C. Uống', 'D. Ghế'],
        correctAnswer: 'D. Ghế', // Ghế là danh từ, còn lại là động từ.
        lesson: 5
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Quả', 'B. Bó', 'C. Củ', 'D. Bán'],
        correctAnswer: 'D. Bán', // Bán là hành động, còn lại là đơn vị đếm/tên vật.
        lesson: 2
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Thỏ', 'B. Chuột', 'C. Vịt', 'D. Chim'],
        correctAnswer: 'B. Chuột', // Chuột là động vật có vú (trừ bay), còn lại là chim.
        lesson: 29
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Tròn', 'B. Vuông', 'C. Mềm', 'D. Dài'],
        correctAnswer: 'C. Mềm', // Mềm là cảm giác/tính chất, còn lại là hình dạng/kích thước.
        lesson: 36
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Lan', 'B. An', 'C. Đạt', 'D. Cờ'],
        correctAnswer: 'D. Cờ', // Cờ là đồ vật, còn lại là tên người.
        lesson: 31
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Mắt', 'B. Tai', 'C. Mũi', 'D. Bé'],
        correctAnswer: 'D. Bé', // Bé là người, còn lại là bộ phận cơ thể.
        lesson: 5
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Trắng', 'B. Đen', 'C. Tím', 'D. Lắm'],
        correctAnswer: 'D. Lắm', // Lắm là từ chỉ số lượng/mức độ, còn lại là màu sắc.
        lesson: 16
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Lớp', 'B. Bàn', 'C. Trường', 'D. Ghế'],
        correctAnswer: 'A. Lớp', // Lớp là nơi chứa Bàn, Ghế, nhưng Bàn/Ghế không phải là nơi chốn.
        lesson: 36
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Mùa', 'B. Hè', 'C. Xuân', 'D. Đông'],
        correctAnswer: 'A. Mùa', // Mùa là khái niệm chung, còn lại là các mùa cụ thể.
        lesson: 14
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Cá', 'B. Cờ', 'C. Vợ', 'D. Vở'],
        correctAnswer: 'A. Cá', // Cá không có dấu hỏi/ngã/nặng.
        lesson: 7
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Chữ', 'B. Số', 'C. Vẽ', 'D. Tô'],
        correctAnswer: 'B. Số', // Số là danh từ/ký hiệu, còn lại là động từ.
        lesson: 25
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Nhà', 'B. Phố', 'C. Làng', 'D. Đèn'],
        correctAnswer: 'D. Đèn', // Đèn là đồ vật, còn lại là địa điểm.
        lesson: 24
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Phở', 'B. Lúa', 'C. Gạo', 'D. Cơm'],
        correctAnswer: 'A. Phở', // Phở là món ăn đã chế biến, còn lại là nguyên liệu.
        lesson: 26
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Bướm', 'B. Ong', 'C. Ve', 'D. Cỏ'],
        correctAnswer: 'D. Cỏ', // Cỏ là thực vật, còn lại là côn trùng.
        lesson: 27
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Bàn chân', 'B. Đầu gối', 'C. Vai', 'D. Bàn'],
        correctAnswer: 'D. Bàn', // Bàn là đồ vật, còn lại là bộ phận cơ thể.
        lesson: 31
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Rửa', 'B. Lau', 'C. Sáng', 'D. Quét'],
        correctAnswer: 'C. Sáng', // Sáng là tính từ/màu sắc, còn lại là động từ dọn dẹp.
        lesson: 21
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Chim sẻ', 'B. Vịt bầu', 'C. Gà ri', 'D. Bò'],
        correctAnswer: 'D. Bò', // Bò là động vật 4 chân, còn lại là gia cầm/chim.
        lesson: 6
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Nước', 'B. Sữa', 'C. Giấy', 'D. Trà'],
        correctAnswer: 'C. Giấy', // Giấy là vật liệu khô, còn lại là đồ uống.
        lesson: 28
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Ghế gỗ', 'B. Bàn học', 'C. Cờ', 'D. Giường tre'],
        correctAnswer: 'C. Cờ', // Cờ là vật nhỏ/đồ chơi/biểu tượng, còn lại là đồ nội thất lớn.
        lesson: 3
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Sách', 'B. Vở', 'C. Bút', 'D. Tôm'],
        correctAnswer: 'D. Tôm', // Tôm là thức ăn/động vật, còn lại là đồ dùng học tập.
        lesson: 36
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Ăn cơm', 'B. Đi chợ', 'C. Bơi', 'D. Nhảy'],
        correctAnswer: 'B. Đi chợ', // Hành động cần địa điểm (chợ), còn lại là hành động độc lập.
        lesson: 10
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Màu hồng', 'B. Màu xanh', 'C. Màu vàng', 'D. Màu cam'],
        correctAnswer: 'D. Màu cam', // Từ này không có âm đầu 'm'.
        lesson: 16
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Nấu', 'B. Nướng', 'C. Rán', 'D. Bát'],
        correctAnswer: 'D. Bát', // Bát là đồ vật, còn lại là hành động chế biến thức ăn.
        lesson: 25
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Xa', 'B. Gần', 'C. Cao', 'D. Chơi'],
        correctAnswer: 'D. Chơi', // Chơi là động từ, còn lại là tính từ chỉ vị trí/kích thước.
        lesson: 27
    },
    {
        type: 'odd_one_out',
        questionText: 'Từ nào khác loại so với các từ còn lại?',
        speakText: 'Từ nào khác loại so với các từ còn lại?',
        options: ['A. Nhảy dây', 'B. Đá bóng', 'C. Đọc sách', 'D. Đếm'],
        correctAnswer: 'D. Đếm', // Đếm là hành động học tập/tư duy, còn lại là trò chơi/thể thao.
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
        correctAnswer: 'A. Cá cờ', // 'C' đi với 'a'
        lesson: 3
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Giường', 'B. Dường', 'C. Rường'],
        correctAnswer: 'A. Giường', // Giờ đi với nguyên âm đơn
        lesson: 17
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Kì đà', 'B. Cì đà', 'C. Quì đà'],
        correctAnswer: 'A. Kì đà', // K đi với i
        lesson: 11
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Gà gô', 'B. Ghà gô', 'C. Nghà gô'],
        correctAnswer: 'A. Gà gô', // G đi với a, o
        lesson: 17
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Ngôi nhà', 'B. Nghôi nhà'],
        correctAnswer: 'A. Ngôi nhà', // Ng đi với o
        lesson: 19
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Nghĩ ngợi', 'B. Ngĩ ngợi'],
        correctAnswer: 'A. Nghĩ ngợi', // Ngh đi với i
        lesson: 19
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Bó cỏ', 'B. Bó ko'],
        correctAnswer: 'A. Bó cỏ', // C đi với o
        lesson: 6
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Giỏ hoa', 'B. Rổ hoa'],
        correctAnswer: 'A. Giỏ hoa', // Giờ
        lesson: 17
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Chơi đùa', 'B. Trơi đùa'],
        correctAnswer: 'A. Chơi đùa', // Phân biệt ch/tr
        lesson: 14
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Sắc sảo', 'B. Xắc xảo'],
        correctAnswer: 'A. Sắc sảo', // Phân biệt s/x
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Sô cô la', 'B. Xô cô la'],
        correctAnswer: 'A. Sô cô la', // Phân biệt s/x
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Dưa hấu', 'B. Rưa hấu'],
        correctAnswer: 'A. Dưa hấu', // Phân biệt d/r
        lesson: 8
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Rảnh rỗi', 'B. Giảnh giỗi'],
        correctAnswer: 'A. Rảnh rỗi', // Phân biệt r/gi
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Chiếc thuyền', 'B. Chiếc thuyền'],
        correctAnswer: 'B. Chiếc thuyền', // Phân biệt ch/tr
        lesson: 23
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Lúa chín', 'B. Lúa chín'],
        correctAnswer: 'A. Lúa chín', // Phân biệt ch/tr
        lesson: 14
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền âm đầu đúng: ...uê hương.',
        speakText: 'Điền âm đầu đúng: Quê hương.',
        options: ['A. Qu', 'B. C', 'C. K'],
        correctAnswer: 'A. Qu', // Quê hương (Qu)
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền âm đầu đúng: ...ẻ gỗ.',
        speakText: 'Điền âm đầu đúng: Kẻ gỗ.',
        options: ['A. C', 'B. K'],
        correctAnswer: 'B. K', // Kẻ (K đi với e)
        lesson: 11
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền âm đầu đúng: ...ìu rìu.',
        speakText: 'Điền âm đầu đúng: Rìu rìu.',
        options: ['A. D', 'B. Gi', 'C. R'],
        correctAnswer: 'C. R', // Rìu (R)
        lesson: 21
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Phô ...ở.',
        speakText: 'Điền vần đúng: Vở học.',
        options: ['A. vỡ', 'B. vở'],
        correctAnswer: 'B. vở', // Vở học (vở)
        lesson: 7
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: ...an can.',
        speakText: 'Điền vần đúng: Lan can.',
        options: ['A. Lan', 'B. Làn'],
        correctAnswer: 'A. Lan', // Lan can (Lan)
        lesson: 31
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Xe ...ạp.',
        speakText: 'Điền vần đúng: Xe đạp.',
        options: ['A. đap', 'B. đạp'],
        correctAnswer: 'B. đạp', // Xe đạp (đạp)
        lesson: 30
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Hòm ....',
        speakText: 'Điền vần đúng: Hòm đồ.',
        options: ['A. om', 'B. op'],
        correctAnswer: 'A. om', // Hòm (om)
        lesson: 36
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: ...uồn tôm.',
        speakText: 'Điền vần đúng: Buồn tôm.',
        options: ['A. uôn', 'B. uông'],
        correctAnswer: 'A. uôn', // Buồn (uôn)
        lesson: 36
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Cặp ...ách.',
        speakText: 'Điền vần đúng: Cặp sách.',
        options: ['A. ach', 'B. anh'],
        correctAnswer: 'A. ach', // Sách (ach)
        lesson: 34
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Quả ...am.',
        speakText: 'Điền vần đúng: Quả cam.',
        options: ['A. am', 'B. ap'],
        correctAnswer: 'A. am', // Cam (am)
        lesson: 34
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Con ...ợn.',
        speakText: 'Điền vần đúng: Con lợn.',
        options: ['A. ơn', 'B. ơp'],
        correctAnswer: 'A. ơn', // Lợn (ơn)
        lesson: 32
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: Cây ...anh.',
        speakText: 'Điền vần đúng: Cây xanh.',
        options: ['A. xan', 'B. xanh'],
        correctAnswer: 'B. xanh', // Xanh (anh)
        lesson: 31
    },
    {
        type: 'choose_correct_word',
        questionText: 'Điền vần đúng: ...ợp tác.',
        speakText: 'Điền vần đúng: Hợp tác.',
        options: ['A. hợp', 'B. hơn'],
        correctAnswer: 'A. hợp', // Hợp (ớp)
        lesson: 36
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Thỏ thau', 'B. Thỏ tha'],
        correctAnswer: 'B. Thỏ tha', // Thỏ (th)
        lesson: 23
    },
    {
        type: 'choose_correct_word',
        questionText: 'Từ nào được viết đúng theo luật chính tả?',
        speakText: 'Từ nào được viết đúng theo luật chính tả?',
        options: ['A. Giỗ tổ', 'B. Dỗ tổ'],
        correctAnswer: 'A. Giỗ tổ', // Giỗ (Gi)
        lesson: 17
    },
];
