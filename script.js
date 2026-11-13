// دالة عرض الأقسام والتنقل بينها
function showCategory(categoryId, btnElement) {
  const sections = document.querySelectorAll('.section');
  const buttons = document.querySelectorAll('.nav-btn');

  // إزالة حالة التفعيل عن كل الأزرار
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // تفعيل الزر الحالي
  btnElement.classList.add('active');

  // في حالة الضغط على "الكل"
  if (categoryId === 'all') {
    sections.forEach(section => {
      section.classList.add('active');
    });
  } else {
    // إخفاء الكل وإظهار القسم المحدد فقط
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(categoryId).classList.add('active');
  }
}