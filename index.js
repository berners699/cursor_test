let name1_test = '张三' 
let name2_test = '李四' 
let name3_test = '王五'
let name4_test = '赵六'
let name5_test = '孙七'
let name6_test = '周八'
let name7_test = '吴九'
let name8_test = '郑十'
let name9_test = '陈十一'

const a = 3
console.log(a)

// 冒泡排序算法
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            // 如果当前元素大于下一个元素，则交换它们
            if (arr[j] > arr[j + 1]) {
                // 使用解构赋值进行交换
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // 如果没有发生交换，说明数组已经有序，可以提前退出
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

// 测试用例
console.log('=== 冒泡排序测试用例 ===');

// 测试用例1：普通数字数组
const testArray1 = [64, 34, 25, 12, 22, 11, 90];
console.log('测试用例1 - 原始数组:', testArray1);
console.log('排序后:', bubbleSort([...testArray1]));

// 测试用例2：已排序数组
const testArray2 = [1, 2, 3, 4, 5];
console.log('\n测试用例2 - 已排序数组:', testArray2);
console.log('排序后:', bubbleSort([...testArray2]));

// 测试用例3：逆序数组
const testArray3 = [5, 4, 3, 2, 1];
console.log('\n测试用例3 - 逆序数组:', testArray3);
console.log('排序后:', bubbleSort([...testArray3]));

// 测试用例4：包含重复元素的数组
const testArray4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log('\n测试用例4 - 包含重复元素:', testArray4);
console.log('排序后:', bubbleSort([...testArray4]));

// 测试用例5：空数组
const testArray5 = [];
console.log('\n测试用例5 - 空数组:', testArray5);
console.log('排序后:', bubbleSort([...testArray5]));

// 测试用例6：只有一个元素的数组
const testArray6 = [42];
console.log('\n测试用例6 - 单元素数组:', testArray6);
console.log('排序后:', bubbleSort([...testArray6]));

// 测试用例7：包含负数的数组
const testArray7 = [-5, 10, -3, 0, 7, -8, 2];
console.log('\n测试用例7 - 包含负数:', testArray7);
console.log('排序后:', bubbleSort([...testArray7]));

// === 补充未覆盖的测试用例 ===

// 测试用例8：包含非数字元素（如字符串、null、undefined、NaN等）
const testArray8 = [1, 'a', 3, null, undefined, NaN, 2];
console.log('\n测试用例8 - 包含非数字元素:', testArray8);
try {
    console.log('排序后:', bubbleSort([...testArray8]));
} catch (e) {
    console.log('排序出错:', e.message);
}

// 测试用例9：包含Infinity和-Infinity
const testArray9 = [5, Infinity, 3, -Infinity, 2];
console.log('\n测试用例9 - 包含Infinity和-Infinity:', testArray9);
console.log('排序后:', bubbleSort([...testArray9]));

// 测试用例10：多维数组
const testArray10 = [1, [2, 3], 4];
console.log('\n测试用例10 - 多维数组:', testArray10);
try {
    console.log('排序后:', bubbleSort([...testArray10]));
} catch (e) {
    console.log('排序出错:', e.message);
}

// 测试用例11：极大或极小数值
const testArray11 = [Number.MAX_SAFE_INTEGER, 0, Number.MIN_SAFE_INTEGER, 999];
console.log('\n测试用例11 - 极大或极小数值:', testArray11);
console.log('排序后:', bubbleSort([...testArray11]));

// 测试用例12：非数组类型输入（如对象、数字、字符串等）
const testArray12_1 = 123;
const testArray12_2 = "hello";
const testArray12_3 = { a: 1, b: 2 };
console.log('\n测试用例12 - 非数组类型输入:');
try {
    console.log('数字:', bubbleSort(testArray12_1));
} catch (e) {
    console.log('数字排序出错:', e.message);
}
try {
    console.log('字符串:', bubbleSort(testArray12_2));
} catch (e) {
    console.log('字符串排序出错:', e.message);
}
try {
    console.log('对象:', bubbleSort(testArray12_3));
} catch (e) {
    console.log('对象排序出错:', e.message);
}

// 性能测试
console.log('\n=== 性能测试 ===');
const largeArray = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
const startTime = performance.now();

bubbleSort([...largeArray]);
const endTime = performance.now();
console.log(`1000个随机数的排序耗时: ${(endTime - startTime).toFixed(2)} 毫秒`);

// 使用已声明的变量a
// 这段代码的作用是判断变量a是否大于2，如果是则执行if语句块，否则执行else语句块。
// 但是，这里存在一个问题：变量a在此之前并没有声明或赋值，直接使用会导致运行时报错（ReferenceError: a is not defined）。
// 正确做法应该在使用a之前先声明并赋值，例如：let a = 3;
if (a > 2) {
    console.log('a大于2');
} else {
    console.log('a小于2');
}








