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

## Thứ tự từ điển

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

## 2.1. SINH CÁC DÃY NHỊ PHÂN ĐỘ DÀI N

Một dãy nhị phân độ dài $n$ là một dãy $x[1..n]$ trong đó $x[i] ∈ {0, 1} (∀i : 1 ≤ i ≤ n)$.

**_Dễ thấy:_**

-   Một dãy nhị phân $x$ độ dài $n$ là biểu diễn `nhị phân` của một giá trị nguyên $p(x)$ nào đó
    nằm trong đoạn $[0, 2n - 1]$.

-   Số các dãy nhị phân độ dài $n =$ `số các số tự nhiên` $∈ [0, 2n - 1] = 2n$.

-   Ta sẽ lập chương trình liệt kê các dãy nhị phân theo thứ tự từ điển có nghĩa là sẽ liệt kê lần lượt các dãy nhị phân biểu diễn các số nguyên theo thứ tự $0, 1, ..., 2n -1$.

**_Ví dụ:_** Khi $n = 3$, các dãy nhị phân độ dài 3 được liệt kê như sau:

|        |     |     |     |     |     |     |     |     |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- |
| $p(x)$ | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| $x$    | 000 | 001 | 010 | 100 | 011 | 101 | 110 | 111 |

Như vậy dãy `đầu tiên` sẽ là $00...0$ và dãy `cuối cùng` sẽ là $11...1$. Nhận xét rằng nếu dãy $x = x[1..n]$ là dãy `đang có và không phải dãy cuối cùng` cần liệt kê thì dãy `kế tiếp` sẽ nhận được bằng cách `cộng thêm 1`( theo cơ số 2 có nhớ) vào dãy hiện tại.

| **_Ví dụ khi n = 8:_** |            |              |            |
| ---------------------- | ---------- | ------------ | ---------- |
| Dãy đang có:           | $10010000$ | Dãy đang có: | $10010111$ |
| cộng thêm 1:           | + 1        | cộng thêm 1: | + 1        |
| Dãy mới:               | 10010001   | Dãy mới:     | 10011000   |

```
Như vậy kỹ thuật sinh cấu hình kế tiếp từ cấu hình hiện tại có thể mô tả như sau:

- Xét từ cuối dãy về đầu (xét từ hàng đơn vị lên), tìm số 0 gặp đầu tiên
  + Nếu thấy thì thay số 0 đó bằng số 1 và đặt tất cả các phần tử phía sau vị trí đó bằng 0.
  + Nếu không thấy thì thì toàn dãy là số 1, đây là cấu hình cuối cùng

- Dữ liệu vào (Input): nhập từ file văn bản BSTR.INP chứa số nguyên dương n ≤ 100

- Kết quả ra (Output): ghi ra file văn bản BSTR.OUT các dãy nhị phân độ dài n.
```

<div style="width:100%;display: flex; justify-content: center">
    <table style="display:inline-block;">
    <thead>
        <th>BSTR.INP</th>
        <th>BSTR.OUT</th>
    </thead>
    <tbody>
        <tr>
            <td style="vertical-align: top;">3</td>
            <td>000<br>001<br>010<br>100<br>011<br>101<br>110<br>111</td>
        </tr>
    </tbody>
    </table>
</div>

<center>
P_1_02_1.PAS * Thuật toán sinh liệt kê các dãy nhị phân độ dài n
</center>

**Thể hiện thuật toán với C++**

```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <math.h>

using namespace std;
/**
 * đọc chuỗi kí tự được lưu ở dòng 1 của file lưu
 * trả về: (kiểu: string)
*/
string readFile()
{
    string inputText;
    string inpFile = "BSTR.INP.txt";
    fstream infile;
    infile.open(inpFile);
    while (!infile.eof()) // kiểm tra xem đã là kết thúc của file hay chưa
    {
        getline(infile, inputText); // đọc chuỗi kí tự của một dòng và lưu vào biến được chỉ định
        break;
    }
    infile.close();
    return inputText;
}
/**
 * hiển thị dãy nhị phân
 *
*/
void printArray(int *array, int sizeOfArray)
{
    for (int i = 0; i < sizeOfArray; i++)
    {
        cout << array[i];
    }
    cout << endl;
}
/**
 * khởi tạo mảng ban đầu
 * gán giá trị mặc định cho các phần tử trong một mảng
 * giá trị mặc định ở bài toán này - 0
*/
void initArray(int *array, int sizeOfArray)
{
    for (int i = sizeOfArray - 1; i >= 0; i--)
    {
        array[i] = 0;
    }
}
/**
 * triển khai thuật toán - sinh các chuỗi nhị phân có độ dài (n) được lưu trong file
 *
*/
void binaryStringEnumeration()
{
    string outputFile = "BSTR.OUT.txt";
    string inputText = readFile();
    // chuyển đổi string -> integer
    stringstream geek(inputText);
    int inputVal = 0;
    geek >> inputVal;
    // khởi tạo mảng
    int array[inputVal];
    initArray(array, inputVal);
    // tổng số các chuỗi nhị phân có độ dài n
    int numberOfBinaryArrays = pow(2, inputVal);
    // hiển thị chuổi ban đầu
    printArray(array, inputVal);
    // thực hiển tìm kiếm các chuỗi nhị phân tiếp theo
    while (numberOfBinaryArrays > 0)
    {
        // kiểm tra từ cuối lên đầu các số trong chuỗi nhị phân hiện tại
        for (int i = inputVal - 1; i >= 0; i--)
        {
            // nếu số hiện tại là 0 thì tiến hành
            if (array[i] == 0)
            {
                // gán bằng số hiện tại = 1
                array[i] = 1;
                // thực hiện chuyển hết các số phía số hiện tại về = 0 (vị trí: i + 1 --> vị trí cuối cùng của chuỗi)
                for (int j = i + 1; j < inputVal; j++)
                {
                    array[j] = 0;
                }
                // hiển thị chuỗi mới
                printArray(array, inputVal);
                break;
            }
        }
        numberOfBinaryArrays--;
    }
}

int main()
{
    binaryStringEnumeration();
}
```
