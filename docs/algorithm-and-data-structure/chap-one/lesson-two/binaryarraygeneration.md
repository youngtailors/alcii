# 2.1. SINH CÁC DÃY NHỊ PHÂN ĐỘ DÀI N

## Mô tả thuật toán

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

## Thể hiện thuật toán với C++

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
