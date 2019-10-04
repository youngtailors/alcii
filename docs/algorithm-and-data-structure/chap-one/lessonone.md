# §1. NHẮC LẠI MỘT SỐ KIẾN THỨC ĐẠI SỐ TỔ HỢP

> Cho $S$ là một tập hữu hạn gồm $n$ phần tử và $k$ là một số tự nhiên.
>
> Gọi $X$ là tập các số nguyên dương từ 1 đến $k$: $X = {1, 2, ..., k}$

## 1.1. CHỈNH HỢP LẶP

Mỗi ánh xạ $f: X$ $=>$ $S$. Cho tương ứng với mỗi $i ∈ X$, một và chỉ một phần tử $f(i) ∈ S$.

Được gọi là một chỉnh hợp lặp chập $k$ của $S$.

Nhưng do $X$ là tập hữu hạn ($k$ phần tử) nên ánh xạ $f$ có thể xác định qua bảng các giá trị $f(1),
f(2), ..., f(k).$

Ví dụ: $S = {A, B, C, D, E, F}; k = 3$. Một ánh xạ $f$ có thể cho như sau:
| | | | |
| ------ | --- | --- | --- |
| $i$ | 1 | 2 | 3 |
| $f(i)$ | E | C | E |

Vậy có thể đồng nhất $f$ với dãy giá trị $(f(1), f(2), ..., f(k))$ và coi dãy giá trị này cũng là một
chỉnh hợp lặp chập $k$ của $S$. Như ví dụ trên $(E, C, E)$ là một chỉnh hợp lặp chập 3 của $S$. Dễ
dàng chứng minh được kết quả sau bằng quy nạp hoặc bằng phương pháp đánh giá khả năng
lựa chọn:

Số chỉnh hợp lặp chập $k$ của tập gồm $n$ phần tử là $n^k$

## 1.2. CHỈNH HỢP KHÔNG LẶP

Khi $f$ là đơn ánh có nghĩa là với $∀i, j ∈ X$ ta có $f(i) = f(j) <=> i = j$. Nói một cách dễ hiểu, khi
dãy giá trị $f(1), f(2), ..., f(k)$ gồm các phần tử thuộc S khác nhau đôi một thì f được gọi là một
chỉnh hợp không lặp chập k của S. Ví dụ một chỉnh hợp không lặp (C, A, E):

|        |     |     |     |
| ------ | --- | --- | --- |
| $i$    | 1   | 2   | 3   |
| $f(i)$ | C   | A   | E   |

Số chỉnh hợp không lặp chập $k$ của tập gồm $n$ phần tử là:

$$P_n^k=n(n-1)(n-2)...(n-k-1)(n-k)={n!\over(n-k)!}$$

## 1.3. HOÁN VỊ

Khi $k = n$. Một chỉnh hợp không lặp chập $n$ của $S$ được gọi là một hoán vị các phần tử của $S$.
Ví dụ: một hoán vị: $〈A, D, C, E, B, F〉$ của $S = {A, B, C, D, E, F}$

|        |     |     |     |     |     |     |
| ------ | --- | --- | --- | --- | --- | --- |
| $i$    | 1   | 2   | 3   | 4   | 5   | 6   |
| $f(i)$ | A   | D   | C   | E   | B   | F   |
