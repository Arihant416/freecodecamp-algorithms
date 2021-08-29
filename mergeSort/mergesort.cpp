/*
Author : Arihant Jain
github:https://github.com/Arihant416
linkedin : https://www.linkedin.com/in/arihant416
*/
#include <bits/stdc++.h>
using namespace std;
#define ll long long int
#define ull unsigned ll
#define PB push_back
#define MP make_pair
#define flash ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr)
#define vi vector<int>
#define vl vector<ll>
#define vll vector<ull>
#define mpi map<int, int>
#define mpl map<ll, ll>
#define mpll map<ull, ull>
#define pi pair<int, int>
#define pl pair<ll, ll>
#define all(a) begin(a), end(a)
#define maxEl(a) *max_element(all(a))
#define minEl(a) *min_element(all(a))
#define uimap unordered_map<int, int>
#define ulmap unordered_map<ll, ll>
#define mppii map<pi, int>

void merge(vi &v, int &low, int &mid, int &high)
{
  int X = mid - low + 1, Y = high - mid;
  vi left(X), right(Y);
  for (int i = 0; i < X; i++)
  {
    left[i] = v[low + i];
  }
  for (int j = 0; j < Y; j++)
  {
    right[j] = v[mid + j + 1];
  }
  int i(0), j(0), k(low);
  while (i < X && j < Y)
  {
    if (left[i] < right[j])
    {
      v[k] = left[i++];
    }
    else
    {
      v[k] = right[j++];
    }
    k++;
  }
  while (i < X)
  {
    v[k++] = left[i++];
  }
  while (j < Y)
  {
    v[k++] = right[j++];
  }
}

void mergeSort(vi &v, int low, int high)
{
  if (low < high)
  {
    int mid = low + (high - low) / 2;
    mergeSort(v, low, mid);
    mergeSort(v, mid + 1, high);
    merge(v, low, mid, high);
  }
}

int32_t main()
{
  flash;
  vector<int> arr = {1,
                     4,
                     2,
                     8,
                     345,
                     123,
                     43,
                     32,
                     5643,
                     63,
                     123,
                     43,
                     2,
                     55,
                     1,
                     234,
                     92};

  mergeSort(arr, 0, arr.size());
  for (auto &i : arr)
    cout << i << " ";
  return 0;
}