# Thứ tự từ điển

Trên các kiểu dữ liệu đơn giản chuẩn, người ta thường nói tới khái niệm `thứ tự`. Ví dụ trên
kiểu `Integer` thì có quan hệ: `1 < 2; 2 < 3; 3 < 10;...,` trên kiểu ký tự `Char` thì cũng có quan hệ `'A' < 'B'; 'C' < 'c'...`

Xét quan hệ thứ tự toàn phần `nhỏ hơn hoặc bằng` ký hiệu $<=$ trên một tập hợp $S$, là quan hệ hai ngôi thoả mãn bốn tính chất:

```
Với ∀a, b, c ∈ S
Tính phổ biến: Hoặc là a ≤ b, hoặc b ≤ a;
Tính phản xạ: a ≤ a
Tính phản đối xứng: Nếu a ≤ b và b ≤ a thì bắt buộc a = b.
Tính bắc cầu: Nếu có a ≤ b và b ≤ c thì a ≤ c.
```

Trong trường hợp $a ≤ b$ và $a ≠ b$, ta dùng ký hiệu $<$ cho gọn, (ta ngầm hiểu các ký hiệu như
$≥$, $>$, khỏi phải định nghĩa)

> Ví dụ như quan hệ $<=$ trên các số nguyên cũng như trên các kiểu vô hướng, liệt kê là quan hệ
> thứ tự toàn phần.

Trên các dãy `hữu hạn`, người ta cũng xác định một quan hệ thứ tự:

Xét $a[1..n]$ và $b[1..n]$ là hai dãy độ dài $n$, trên các phần tử của $a$ và $b$ đã có quan hệ thứ tự $<=$.

Khi đó $a ≤ b$ nếu như

-   Hoặc $a[i] = b[i]$ với $∀i:1 ≤ i ≤ n$.

-   Hoặc tồn tại một số nguyên dương $k: 1 ≤ k < n$ để:

    $a[1] = b[1]$

    $a[2] = b[2]$

    $a[k-1] = b[k-1]$

    $a[k] = b[k]$

    $a[k+1] < b[k+1]$

Trong trường hợp này, ta có thể viết $a < b$.

Thứ tự đó gọi là thứ tự từ điển trên các dãy độ dài $n$.

Khi độ dài hai dãy $a$ và $b$ `không bằng nhau`, người ta cũng xác định được `thứ tự từ điển`. Bằng cách `thêm vào` cuối dãy $a$ hoặc dãy $b$ những phần tử `đặc biệt` gọi là phần tử $∅$ để `độ dài của a và b bằng nhau`, và coi những phần tử $∅$ này `nhỏ hơn tất cả` các phần tử khác, ta lại đưa về xác định thứ tự từ điển của hai dãy cùng độ dài.

**_Ví dụ:_**

```
(1, 2, 3, 4) < (5, 6)
(a, b, c) < (a, b, c, d)
'calculator' < 'computer'
```
