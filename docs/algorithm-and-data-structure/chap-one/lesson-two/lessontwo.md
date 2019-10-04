# §2. PHƯƠNG PHÁP SINH (GENERATION)

Phương pháp sinh có thể áp dụng để giải bài toán liệt kê tổ hợp đặt ra nếu như hai điều kiện sau thoả mãn:

-   Có thể xác định được một thứ tự trên tập các cấu hình tổ hợp cần liệt kê. Từ đó có thể biết được cấu hình đầu tiên và cấu hình cuối cùng trong thứ tự đó.
-   Xây dựng được thuật toán từ một cấu hình chưa phải cấu hình cuối, sinh ra được cấu hình kế tiếp nó.

Phương pháp sinh có thể mô tả như sau:

```
(Xây dựng cấu hình đầu tiên);
repeat
    (Đưa ra cấu hình đang có);
    (Từ cấu hình đang có sinh ra cấu hình kế tiếp nếu còn);
until (hết cấu hình);
```
